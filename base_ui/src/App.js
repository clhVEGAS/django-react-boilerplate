import { useState,useEffect } from 'react';

import { ItemContext } from './components/ItemContext';
import logo from './logo.svg';
import './App.css';

import ItemTable from './components/ItemTable';
import TextBox from './components/TextBox';

import getItems from './functions/getItems';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [items, setItems] = useState({});
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  const [id, setID] = useState('');

  useEffect(() => {
    getItems().then(data => {
        setItems(data)
    });
  }, [setItems])

  return (
    <div className="App">
      <header className="App-header">
          <Container className='base-bg'><ItemContext.Provider value={{item:[items, setItems], texts:[text, setText]}}>
          <div className='jumbotron'>
            <Row>
              <Col xs={9}>
                <h1 className='float-start jumbobigtext'>React/Django Boilerplate</h1><br/><br/>
                <p className='jumbosmalltext float-end'>Example CRUD Application w/ User Authentication and Admin Section</p>
              </Col>
              <Col><img src={logo} className="App-logo float-end" alt="logo" /></Col>
            </Row>
            <Row className='align-items-end'>
              <Col><TextBox checked={checked} setChecked={setChecked} id={id} /></Col>
            </Row>
          </div><ItemTable checked={checked} setChecked={setChecked} setID={setID} />
          </ItemContext.Provider></Container>
      </header>
    </div>
  );
}

export default App;
