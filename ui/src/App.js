import {React, useEffect} from "react";
import {Counter} from "./features/counter/Counter";
import { Container, Row } from "reactstrap";
import SiteNavbar from "./components/navBar";
import Login from "./features/login/Login";
import { useSelector, useDispatch } from 'react-redux';
import { storeAuth, storeErr } from "./features/login/userSlice";
import { useLogOutMutation, useWhoAmIMutation } from './features/login/loginApi';


function App(props) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const dispatch = useDispatch();
  const [logout_trigger] = useLogOutMutation()
  const [whoami_trigger] = useWhoAmIMutation()
  useEffect(() => {getSession()});

  const getSession = () => {
    fetch("/api/uhandle/session/", {
      credentials: "same-origin",
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.isAuthenticated) {
        dispatch(storeAuth(true));
      } else {
        dispatch(storeAuth(false));
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const whoami = async () => {
    try{
      let print = await whoami_trigger();
      alert(print.data.username);
    } catch(err){
      console.error('Uhhh.. Who are you?: ', err);
      dispatch(storeAuth(false));
      dispatch(storeErr(err));
    }
  }
  
  const logout = async () => {
    try{
      await logout_trigger();
      dispatch(storeAuth(false));
      dispatch(storeErr(''));
    } catch(err){
      console.error('Failed to log out: ', err)
      dispatch(storeAuth(false));
      dispatch(storeErr(err));
    }
  }

  const renderLogin = () => {
    if (!isAuthenticated) {
      return (
        <Container>
        <Row>
          <SiteNavbar whoami={whoami} logout={logout} isAuthenticated={isAuthenticated}/>
        </Row>
          <br />
        <Login />
        </Container>
      );
    }
    return (
      <Container>
        <Row>
          <SiteNavbar  whoami={whoami} logout={logout} isAuthenticated={isAuthenticated}/>
        </Row>
        <Row>
          <Counter />
        </Row>
      </Container>
    )
  }

  // Main Return
  return(
    renderLogin()
  )
}

export default App;