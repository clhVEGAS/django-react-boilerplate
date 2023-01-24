import {React, useEffect} from "react";
import {Counter} from "./features/counter/Counter";
import { Container, Row } from "reactstrap";
import SiteNavbar from "./components/navBar";
import Login from "./features/login/Login";
import { useSelector, useDispatch } from 'react-redux';
import { storeAuth } from "./features/login/userSlice";


function App(props) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
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

  const renderLogin = () => {
    if (!isAuthenticated) {
      return (
        <Container>
        <Row>
          <SiteNavbar />
        </Row>
          <br />
        <Login />
        </Container>
      );
    }
    return (
      <Container>
        <Row>
          <SiteNavbar />
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