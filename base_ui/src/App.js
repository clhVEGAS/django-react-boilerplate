import { useState,useEffect } from 'react';

import { ItemContext } from './components/ItemContext';
import logo from './logo.svg';
import './App.css';

import ItemTable from './components/ItemTable';
import TextBox from './components/TextBox';

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
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemContext.Provider value={{item:[items, setItems], texts:[text, setText]}}>
          <TextBox checked={checked} setChecked={setChecked} id={id} />
          <ItemTable checked={checked} setChecked={setChecked} setID={setID} />
        </ItemContext.Provider>
      </header>
    </div>
  );
}

export default App;
