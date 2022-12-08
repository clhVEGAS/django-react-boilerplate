import { useState, useContext, useEffect } from "react";
import addItem from "../functions/addItem";
import getItems from "../functions/getItems";
import updItem from "../functions/updateItem";
import { ItemContext } from "../context/ItemContext";

function TextBox(props){
    const {item, texts} = useContext(ItemContext)
    const [items, setItems] = item
    const [text, setText] = texts

    const [updateme, setUpdateme] = useState(false)

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if (props.checked === true){
            updItem(text, props.id)
            getItems().then(data => {
                setItems(data);
                setUpdateme(!updateme);
                props.setChecked(false);
                setText('');
            });
            
        } else {
            addItem(text)
            getItems().then(data => {
                setItems(data)
            });
            setText('')
            setUpdateme(!updateme)
        }
    }
    useEffect(() => {
        getItems().then(data => {
            setItems(data)
        });
      }, [updateme])
    return(
        <>        
            <form onSubmit={submit}>
                <input type={'text'} value={text} placeholder="name" onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default TextBox;