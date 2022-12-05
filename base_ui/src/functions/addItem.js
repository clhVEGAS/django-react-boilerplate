async function addItem(text){
    let body = {name:text}
    let response = fetch('http://localhost:8000/api/items/add', {
        method: 'POST',
        headers: {
            'Content-Type':'application/JSON',
        },
        body: JSON.stringify(body)
    })
      .catch(error => console.log(error))
    // console.log(items)
    return response
    }

export default addItem;