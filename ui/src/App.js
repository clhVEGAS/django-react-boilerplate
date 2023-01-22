import {React, useState, useEffect} from "react";
import Cookies from "universal-cookie";
import {Counter} from "./features/counter/Counter";
import { Container, Row } from "reactstrap";
import Site_Navbar from "./components/navBar";
import Login from "./features/login/Login";

const cookies = new Cookies();

function App(props) {
  const [username, handleUserNameChange] = useState('');
  const [password, handlePasswordChange] = useState('');
  const [error, setErr] = useState('');
  const [isAuthenticated, setAuth] = useState(false);

  useEffect(() => {getSession()});

  const getSession = () => {
    fetch("/api/session/", {
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

  const whoami = () => {
    fetch("/api/whoami/", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("You are logged in as: " + data.username);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const isResponseOk = (response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }

  const login = (event) => {
    event.preventDefault();
    fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      credentials: "same-origin",
      body: JSON.stringify({username: username, password: password}),
    })
    .then(isResponseOk)
    .then((data) => {
      console.log(data);
      handleUserNameChange("");
      handlePasswordChange("");
      setErr("");
      setAuth(true);
    })
    .catch((err) => {
      console.log(err);
      setErr("Wrong username or password.");
    });
  }

  const logout = () => {
    fetch("/api/logout", {
      credentials: "same-origin",
    })
    .then(isResponseOk)
    .then((data) => {
      console.log(data);
      setAuth(false);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const renderLogin = () => {
    if (!isAuthenticated) {
      return (
        <Container>
        <Row>
          <Site_Navbar whoami={whoami} logout={logout} isAuthenticated={isAuthenticated}/>
        </Row>
          <br />
        <Login login={login} username={username} handleUserNameChange={handleUserNameChange} password={password} handlePasswordChange={handlePasswordChange} error={error}/>
        </Container>
      );
    }
    return (
      <Container>
        <Row>
          <Site_Navbar  whoami={whoami} logout={logout} isAuthenticated={isAuthenticated}/>
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