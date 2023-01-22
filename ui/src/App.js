import {React, useState, useEffect} from "react";
import {Counter} from "./features/counter/Counter";
import { Container, Row } from "reactstrap";
import SiteNavbar from "./components/navBar";
import Login from "./features/login/Login";
// import { Spinner } from "reactstrap";
import { useCheckUserMutation, useLogOutMutation, useWhoAmIMutation } from './features/login/loginApi';

function App(props) {
  const [checkUser] = useCheckUserMutation()
  const [logout_trigger] = useLogOutMutation()
  const [whoami_trigger] = useWhoAmIMutation()

  const [username, handleUserNameChange] = useState('');
  const [password, handlePasswordChange] = useState('');
  const [error, setErr] = useState('');
  const [isAuthenticated, setAuth] = useState(false);

  useEffect(() => {getSession()});

  const getSession = () => {
    fetch("/api/uhandle/session/", {
      credentials: "same-origin",
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.isAuthenticated) {
        setAuth(true);
      } else {
        setAuth(false);
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
      console.error('Uhhh.. Who are you?: ', err)
      setAuth(false);
      setErr(err);
    }
  }
  
  const login = async (event) => {
    event.preventDefault();
      console.log(username)
      console.log(password)
      try{
        await checkUser({username, password}).unwrap();
        handleUserNameChange('');
        handlePasswordChange('');
        setAuth(true);
        setErr("");
      } catch(err){
        console.error('Failed to log in: ', err)
        setAuth(false);
        setErr(err);
      }
    }

  const logout = async () => {
    try{
      await logout_trigger();
      handleUserNameChange('');
      handlePasswordChange('');
      setAuth(false);
      setErr("");
    } catch(err){
      console.error('Failed to log out: ', err)
      setAuth(false);
      setErr(err);
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
        <Login login={login} username={username} handleUserNameChange={handleUserNameChange} password={password} handlePasswordChange={handlePasswordChange} error={error}/>
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
  return(
    renderLogin()
  )
}

export default App;