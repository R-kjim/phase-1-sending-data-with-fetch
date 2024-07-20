// Add your code here
function submitData(name,email){
    const newObj={method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    },
    body:JSON.stringify( {
        name:name,
        email:email
    })}
   
    return fetch("http://localhost:3000/users",newObj)
    .then(res=>res.json())
    .then(data=>document.body.append(data.id))
    .catch(error=>document.body.append(error.message))

}