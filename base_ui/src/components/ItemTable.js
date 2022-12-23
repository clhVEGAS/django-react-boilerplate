import React, {useContext, useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemContext } from '../context/ItemContext';
import getItems from '../functions/getItems';
import delItem from '../functions/deleteItem';
import { Table } from 'reactstrap';
import uuid from 'react-uuid';


function ItemTable(props) {
    const {item, texts} = useContext(ItemContext)
    const [items, setItems] = item
    const [text, setText] = texts
    const [updateme, setUpdateme] = useState(false)

    useEffect(() => {
        getItems().then(data => {
            setItems(data)
        });
      }, [updateme])
    
    const handleClick = (id) => {
                delItem(parseInt(id));
                getItems().then(data => {
                    setItems(data);
                    setUpdateme(!updateme);
                });
            }
    
    return (
        <form> 
        <Table>
            <tbody>
            <tr>
                <th>id</th>
                <th>name</th>
                <th className='d-none d-sm-block'>created</th>
                <th>delete</th>
                <th>edit</th>
            </tr>
            {Object.values(items).map(item => (
                <tr key={uuid()}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td className='text-responsive d-none d-sm-block'>{item.created}</td>
                    <td><button onClick={(event) => {event.preventDefault();handleClick(item.id);}}>Delete</button></td>
                    <td><input type='radio' name='radio' onClick={(event) => {event.preventDefault(); setText(item.name); props.setChecked(true); props.setID(item.id);}}/></td>
                </tr>
            ))}
            </tbody>
        </Table>
        </form>
  )}

  export default ItemTable;