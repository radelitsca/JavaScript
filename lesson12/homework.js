// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrapper');
//         for (const element of value) {
//             let div = document.createElement('div');
//             div.classList.add('post');
//             for (const key in element) {
//                 let divInner = document.createElement('div');
//                 divInner.innerText = `${key}: ${element[key]}`;
//                 div.append(divInner);
//
//             }
//
//             wrap.append(div);
//         }
//
//         document.body.appendChild(wrap);
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(value => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         for (const element of value) {
//             let div = document.createElement('div');
//             div.classList.add('comment');
//             for (const key in element) {
//                 let divInner = document.createElement('div');
//                 divInner.innerText = `${key}: ${element[key]}`;
//                 div.append(divInner);
//
//             }
//             let line = document.createElement('hr');
//             line.style.width = '100%';
//             wrap.append(div, line);
//         }
//
//         document.body.appendChild(wrap);
//     })