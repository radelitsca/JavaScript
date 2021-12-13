// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (const element of value) {
            let div = document.createElement('div');

            let divUserID = document.createElement('div');
            divUserID.innerText = `User id: ${element.userId}`;
            div.append(divUserID);

            let divID = document.createElement('div');
            divID.innerText = `Id: ${element.id}`;
            div.append(divID);

            let divTitle = document.createElement('div');
            divTitle.innerText = `Title: ${element.title}`;
            div.append(divTitle);

            let divComments = document.createElement('div');
            divComments.innerText = `Body: ${element.body}`;
            div.append(divComments);

            let button = document.createElement('button');
            button.innerText = 'Show comments';

            button.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/comments/${element.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        for (const item of value) {
                            if (element.id === item.postId) {
                                for (const key in item) {
                                    let divInner = document.createElement('div');
                                    divInner.innerText = `${key}: ${item[key]}`;
                                    div.append(divInner);
                                }
                                let line = document.createElement('hr');
                                line.style.width = '100%';
                                div.append(line);
                            }
                            button.disabled = true;
                        }
                    })
            }

            let line = document.createElement('hr');
            line.style.width = '100%';
            wrap.append(div, button);
            div.append(line);
        }

        document.body.appendChild(wrap);
    })