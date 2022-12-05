async function updItem(request, id){
    let body = {name:request}
    let response = fetch('http://localhost:8000/api/items/upd/'+id, {
        method: 'POST',
        headers: {
            'Content-Type':'application/JSON',
        },
        body:JSON.stringify(body)
    })
      .catch(error => console.log(error))
    // console.log(items)
    return response
    }

export default updItem;