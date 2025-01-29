


fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(users => {
    const lista = document.getElementById('users');
    let i=0;
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = "Comentario " + i++ + ": " + user.name;
        lista.appendChild(li);
    });
})

.catch(error => console.log(error));

//Framework .NET
//SQL SERVER

//DOCKER


