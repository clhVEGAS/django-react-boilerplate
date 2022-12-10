import { useState,useEffect } from 'react';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ItemContext } from './context/ItemContext';


import CatPicture from './components/cat';
import ItemTable from './components/ItemTable';
import { Jumbo } from './components/JumboTron'
import { Sales } from './components/SalesComponent'

import getItems from './functions/getItems';


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
          <Container className='base-bg'>
            <ItemContext.Provider value={{item:[items, setItems], texts:[text, setText]}}>
              <Jumbo checked={checked} setChecked={setChecked}/>
              <Routes>
                <Route path="/" element={<ItemTable checked={checked} setChecked={setChecked} setID={setID} id={id}/>} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/cats" element={<CatPicture style={{objectFit:'scale-down'}}/>} />
              </Routes>
            </ItemContext.Provider>
          </Container>
      </header>
    </div>
  );
}

export default App;
