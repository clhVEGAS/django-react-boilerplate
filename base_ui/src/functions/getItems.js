
async function getItems(){
    let items = ''
    await fetch('http://localhost:8000/api/items', {
        method: 'GET',
        headers: {
            'Content-Type':'application/JSON',
        }
    })
        .then(data => data.json())
        .then(data => items = data)
        .catch(error => console.log(error))
    // console.log(items)
    return items
    }

export default getItems;