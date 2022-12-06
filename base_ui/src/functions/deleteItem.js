function delItem(id){
    console.log('http://localhost:8000/api/items/del/'+id)
    fetch('http://localhost:8000/api/items/del/'+id, {
        method: 'POST',
        headers: {
            'Content-Type':'application/JSON',
        }
    })
      .catch(error => console.log(error))
    }

export default delItem;