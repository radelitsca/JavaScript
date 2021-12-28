let user = localStorage.getItem('user');
let userId = JSON.parse(user);
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(value => {
        let userWrap = document.createElement('div');
        userWrap.style.background = 'gold';
        userWrap.style.padding = '5%';
        document.body.style.margin = '0px';
        for (const userkey in value) {
            if (typeof value[userkey] !== 'object') {
                let element = document.createElement('div');
                element.innerText = `${userkey}: ${value[userkey]}`;
                userWrap.appendChild(element);
            } else {
                let wrapper = document.createElement('div');
                for (const itemkey in value[userkey]) {
                    if (typeof value[userkey][itemkey] !== 'object') {
                        let item = document.createElement('div');
                        item.innerText = `${itemkey}: ${value[userkey][itemkey]}`;
                        wrapper.appendChild(item);
                        userWrap.appendChild(wrapper);
                    } else {
                        let wrapper2 = document.createElement('div');
                        for (const key in value[userkey][itemkey]) {
                            let part = document.createElement('div');
                            part.innerText = `${key}: ${value[userkey][itemkey][key]}`;
                            wrapper2.appendChild(part);
                            wrapper.appendChild(wrapper2);
                        }
                    }
                }
            }
            document.body.appendChild(userWrap);
        }
        let button = document.createElement('button');
        button.innerText = 'Post of current user';
        button.style.width = '90%';
        userWrap.appendChild(button);
        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(value => value.json())
                .then(value => {
                    let heading = document.createElement('h2');
                    heading.innerText = 'User posts:';
                    userWrap.append(heading);
                    let postWrap = document.createElement('div');
                    postWrap.style.display = 'grid';
                    postWrap.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr'
                    postWrap.style.gridGap = '15px';
                    for (const element of value) {
                        let wrapper = document.createElement('div');
                        let post = document.createElement('h3');
                        post.innerText = `Title: ${element.title}`;
                        let comments = document.createElement('a');
                        comments.href = 'post-details.html';
                        comments.innerText = 'Get details of post';
                        comments.style.textDecoration = 'none';
                        comments.style.color = 'black';
                        comments.style.background = 'white';
                        wrapper.append(post, comments)
                        postWrap.append(wrapper);
                        userWrap.append(postWrap);
                        comments.onclick = function () {
                            console.log(`${element.id}`)
                            localStorage.setItem('post', `${element.id}`);
                        }
                    }

                })
        }

    })
