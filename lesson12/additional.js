// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(usersList => {
        let wrap = document.createElement('div');
        document.body.appendChild(wrap);
        wrap.classList.add('wrap');
        for (const user of usersList) {
            let userWrap = document.createElement('div');
            for (const userkey in user) {
                if (typeof user[userkey] !== 'object') {
                    let element = document.createElement('div');
                    element.innerText = `${userkey}: ${user[userkey]}`;
                    userWrap.appendChild(element);
                } else {
                    let wrapper = document.createElement('div');
                    for (const itemkey in user[userkey]) {
                        if (typeof user[userkey][itemkey] !== 'object') {
                            let item = document.createElement('div');
                            item.innerText = `${itemkey}: ${user[userkey][itemkey]}`;
                            wrapper.appendChild(item);
                            userWrap.appendChild(wrapper);
                        } else {
                            let wrapper2 = document.createElement('div');
                            for (const key in user[userkey][itemkey]) {
                                let part = document.createElement('div');
                                part.innerText = `${key}: ${user[userkey][itemkey][key]}`;
                                wrapper2.appendChild(part);
                                wrapper.appendChild(wrapper2);
                            }
                        }
                    }
                }
                wrap.append(userWrap);
            }
            let ShowPosts = document.createElement('button');
            ShowPosts.innerText = 'Show posts';
            wrap.append(ShowPosts);
            ShowPosts.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}`)
                    .then(value => value.json())
                    .then(value => {
                        let div = document.createElement('div');

                        let divUserID = document.createElement('div');
                        divUserID.innerText = `User id: ${value.userId}`;
                        div.append(divUserID);

                        let divID = document.createElement('div');
                        divID.innerText = `Id: ${value.id}`;
                        div.append(divID);

                        let divTitle = document.createElement('div');
                        divTitle.innerText = `Title: ${value.title}`;
                        div.append(divTitle);

                        let divComments = document.createElement('div');
                        divComments.innerText = `Body: ${value.body}`;
                        div.append(divComments);

                        let ShowComments = document.createElement('button');
                        ShowComments.innerText = 'Show comments';

                        ShowComments.onclick = function () {
                            fetch(`https://jsonplaceholder.typicode.com/comments/${user.id}`)
                                .then(value => value.json())
                                .then(value => {
                                    let div = document.createElement('div');
                                    div.classList.add('comment');
                                    let divpostID = document.createElement('div');
                                    divpostID.innerText = `Post id: ${value.postId}`;

                                    let divID = document.createElement('div');
                                    divID.innerText = `Id: ${value.id}`;

                                    let name = document.createElement('div');
                                    name.innerText = `Name: ${value.name}`;

                                    let email = document.createElement('div');
                                    email.innerText = `Email: ${value.email}`;

                                    let body = document.createElement('div');
                                    divID.innerText = `Body: ${value.body}`;

                                    div.append(divpostID, divID, name, email, body);

                                    let line = document.createElement('hr');
                                    line.style.width = '100%';
                                    userWrap.append(div, line);

                                    ShowComments.disabled = true;
                                })
                        }

                        let line = document.createElement('hr');
                        line.style.width = '100%';
                        userWrap.append(div, ShowComments, line);

                        ShowPosts.disabled = true;

                    })

            }
        }
    })



