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
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(posts => posts.json())
                    .then(posts => {
                        let div = document.createElement('div');
                        for (const post of posts) {
                            if (user.id === post.userId) {
                                for (const Key in post) {
                                    let postItem = document.createElement('div');
                                    postItem.innerText = `${Key} : ${post[Key]}`;
                                    postItem.classList.add('postId');
                                    div.append(postItem);
                                }
                            }
                            let ShowComments = document.createElement('button');
                            ShowComments.innerText = 'Show comments';
                            let divPost = document.createElement('div');
                            div.append(ShowComments, divPost);
                            ShowComments.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(comments => comments.json())
                                    .then(comments => {
                                        for (const comment of comments) {
                                            if (post.id === comment.postId) {
                                                for (const key in comment) {
                                                    let divComment = document.createElement('div');
                                                    divComment.innerText = `${key}: ${comment[key]}`;
                                                    divPost.append(divComment);
                                                }
                                                let line = document.createElement('hr');
                                                divPost.appendChild(line);
                                            }
                                        }
                                        ShowComments.disabled = true;
                                    })
                            }
                            let line = document.createElement('hr');
                            div.appendChild(line);
                            userWrap.append(div);
                            ShowPosts.disabled = true;
                        }
                    })
            }
        }
    })