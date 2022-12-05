async function delItem(id){
    let response = fetch('http://localhost:8000/api/items/del/'+id, {
        method: 'POST',
        headers: {
            'Content-Type':'application/JSON',
        }
    })
    .then(data => data.json())
      .catch(error => console.log(error))
    // console.log(items)
    return response
    }

export default delItem;