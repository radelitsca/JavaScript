fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let userWrap = document.createElement('div');
        userWrap.style.display = 'grid';
        userWrap.style.gridTemplateColumns = '1fr 1fr';
        for (const item of value) {
            let user = document.createElement('div');
            user.style.background = 'silver';
            user.style.margin = '5px';
            let userID = document.createElement('h2');
            let userName = document.createElement('h3');
            userID.innerText = `Id: ${item.id}`;
            userName.innerText = `Name: ${item.name}`;
            let button = document.createElement('a');
            button.innerText = 'Details';
            button.href = 'user_details.html';
            button.style.marginLeft = '20px'
            button.style.background = 'white';
            button.style.textDecoration = 'none';
            button.style.color = 'black';
            button.onclick = function () {
                console.log(`${item.id}`)
                localStorage.setItem('user', `${item.id}`);
            }
            user.append(userID, userName, button);
            userWrap.append(user);
        }
        document.body.append(userWrap);
    })

