// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// let tr = (a, h) => 1/2*a*h;
// console.log(tr(10, 6));

// - створити функцію яка обчислює та повертає площу кола
// const pi=3.14;
// let circle = (r) => pi*r**2;
// console.log(circle(10));

// - створити функцію яка обчислює та повертає площу циліндру
// const pi = 3.14;
// let square = (h, r) => 2* pi * h * r;
// console.log(square(5,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arr([1, 5, 8, 10, 15, 40]);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let par = (text) => document.write(`<p>${text}</p>`);
// par('item');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ul = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`);
// }
// ul('item');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ul = (text, num) => {
//     document.write(`<ul>`)
//     for (let i=0; i<num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// ul('item', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list = (array) => {
//     document.write(`<ul>`);
//     for (let i=0; i<array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// list ([1, 'text', true, 5, 'array']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let objList = (array) => {
//     for (const item of array) {
//             document.write(`<div>id: ${item['id']}  name: ${item['name']} age: ${item['age']} </div>`)
//     }
// }
// objList([{id:2, name:'vasya',age:15}, {id:4, name:'kolya', age:25}, {id:6, name:'igor',age:50}, {id:8, name:'olya', age:30}]);