// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let text = document.getElementById('text');
// let button = document.getElementById('hidden');
// button.onclick = () => {
//     text.hidden = true;
// }
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('hidden');
// button.onclick = () => {
//     button.hidden = true;
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let f1 = document.getElementById('f1');
// f1.onsubmit = function (e) {
//     e.preventDefault();
// let age = this.age.value;
// if (age < 18) {
//     alert('You are under 18 :(')
// } else {
//     alert('Look our content!')
// }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// let menuHeader = document.getElementById('menu');
// let items = document.getElementById('items');
// menuHeader.onclick = function () {
//  items.classList.toggle('hidden');
// }

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title: 'Person1', body: 'I am happy'},
    {title: 'Person2', body: 'I am sad'},
    {title: 'Person3', body: 'I am sleepy'},
    {title: 'Person4', body: 'I am calm'},
    {title: 'Person5', body: 'I am moody'}
]
for (const comment of comments) {
    let divTitle = document.createElement('div');
    divTitle.innerText = `${comment['title']}`
    let divBody = document.createElement('div');
    divBody.innerText = `${comment['body']}`
    let button = document.createElement('button');
    button.innerText = 'Hide';
    divBody.classList.add('hidden');
    button.onclick = function () {
        divBody.classList.toggle('hidden');
    }
    document.body.append(divTitle, divBody, button);
}





