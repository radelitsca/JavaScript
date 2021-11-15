// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let num = [1, 5, 10, 12, 17];
// for (let i=0; i<=num.length-1; i++) {
//     console.log(num[i]);
// }

// let text = ['text1', 'text2', 'text3', 'text4', 'text5'];
// for (let t of text) {
//     console.log(t);
// }

// let mix = [1, 'text2', true, 'text3', false];
// for (let i=0; i<=mix.length-1; i++) {
//     console.log(mix[i]);
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
// let x;
// let arr = [];
// for (let i=0; i<5; i++) {
//     x=Math.random()*6;
//     arr[i] = Math.round(x);
//     console.log(arr[i]);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i=0; i<10; i++) {
//     document.write(`<div>product</div>`);
// }
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i=0; i<10; i++) {
//     document.write(`<div>product ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<20) {
//     document.write(`<h1>User</h1>`)
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i<20) {
//     document.write(`<h1>User ${i}</h1>`)
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let x;
// let arr=[];
// for (let i=0; i<10; i++) {
//     x = Math.random()*50;
//     arr[i]=Math.round(x);
//     console.log(arr[i]);
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let text = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// for (let t of text) {
//     console.log(t);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let text = ['a', 3, false, 'd', 'e', 5, 'g', true, 'i', 'j'];
// for (let t of text) {
//     console.log(t);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let text = ['a', 3, false, 'd', 'e', 5, 'g', true, 'i', 'j'];
// for (let t of text) {
//     if (typeof (t) === 'boolean') {
//         console.log(t);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let text = ['a', 3, false, 'd', 'e', 5, 'g', true, 'i', 'j'];
// for (let t of text) {
//     if (typeof (t) === 'number') {
//         console.log(t);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let text = ['a', 3, false, 'd', 'e', 5, 'g', true, 'i', 'j'];
// for (let t of text) {
//     if (typeof (t) === 'string') {
//         console.log(t);
//     }
// }

// - Створити порожній масив.Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.
// let arr = [1, 'string', false, 'boob', 67, 'good', 5, true, false, 7];
// for (let i=0; i<=arr.length-1; i++) {
//     console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<10; i++) {
//     console.log(i);
//     document.write(`<div>`)
//     document.write(i);
//     document.write (`</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<100; i++) {
//     console.log(i);
//     document.write(`<div>`)
//     document.write(i);
//     document.write (`</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i<100; i=i+2) {
//     console.log(i);
//     document.write(`<div>`)
//     document.write(i);
//     document.write (`</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0; i<100; i++) {
//     if (i%2===0){
//     console.log(i);
//     document.write(`<div>`)
//     document.write(i);
//     document.write (`</div>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0; i<100; i++) {
//     if (i%2===1){
//     console.log(i);
//     document.write(`<div>`)
//     document.write(i);
//     document.write (`</div>`);
//     }
// }