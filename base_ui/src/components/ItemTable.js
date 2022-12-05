import React, {useContext, useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemContext } from './ItemContext';
import getItems from '../functions/getItems';
import delItem from '../functions/deleteItem';
import { Table } from 'reactstrap';


function ItemTable(props) {
    const {item, texts} = useContext(ItemContext)
    const [items, setItems] = item
    const [text, setText] = texts

    useEffect(() => {
        getItems().then(data => {
            setItems(data);
        });
      }, [])

    
    const handleClick = (item) => {delItem(item.id)}
    
    return (
        <form> 
        <Table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>created</th>
                <th>delete</th>
                <th>edit</th>
            </tr>
            {Object.values(items).map(item => (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.created}</td>
                    <td><button onClick={(item) => handleClick(item)}>Delete</button></td>
                    <td><input type='radio' value={item.name} name='radio' onClick={() => {setText(item.name); props.setChecked(true); props.setID(item.id);}}/></td>
                </tr>
            ))}
        </Table>
        </form>
  )}

  export default ItemTable;