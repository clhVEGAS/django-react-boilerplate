import { useState,useEffect } from 'react';
import { ItemContext } from './context/ItemContext';

import './App.css';
import { Container } from 'reactstrap';

import CatPicture from './components/cat';
import ItemTable from './components/ItemTable';
import { Jumbo } from './components/JumboTron'

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
          <Container className='base-bg'><ItemContext.Provider value={{item:[items, setItems], texts:[text, setText]}}>
            <Jumbo checked={checked} setChecked={setChecked}/>
            {/* <CatPicture style={{objectFit:'scale-down'}}/> */}
            <ItemTable checked={checked} setChecked={setChecked} setID={setID} id={id}/>
            </ItemContext.Provider>
          </Container>
      </header>
    </div>
  );
}

export default App;
