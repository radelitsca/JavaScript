// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
    // якщо два аргументи - складає або конкатенує їх між собою.
// function check (a, b) {
//     let x = typeof a === 'number' && typeof b === 'number';
//     return x;
// }
// function add(a, b) {
// if (arguments.length === 1) {
//     console.log(arguments[0]);
// }
// if (arguments.length === 2) {
//     if (check(a,b)) {
//         console.log(arguments[0]+arguments[1]);
//     } else {
//         console.log( arguments[0] + ' ' + arguments[1]);
//     }
//
// }
// }
// add(2, 5);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function add(array, arr) {
//     let result = [];
//     for (let i=0; i<array.length; i++) {
// result[i] = arr[i]+array[i];
//     }
//     return result;
// }
// let mass = add([2, 5, 7, 9], [1, 3, 5, 7]);
// console.log(mass);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// function  objects (array) {
//     let arr = [];
//     for (let i=0; i<array.length; i++) {
//         const element = array[i]
//           for (const key in element) {
//              arr[arr.length] = key;
//           }
//
//     }
//     console.log(arr);
// }
// objects ([{id:1, name: 'vasya', age: 12}, {model: 'Kemry'}]);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// let mas = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function  objects (array) {
//     let arr = [];
//     for (let i=0; i<array.length; i++) {
//         const element = array[i];
//           for (const key in element) {
//              arr[arr.length] = element[key];
//           }
//
//     }
//     console.log(arr);
// }
// objects (mas);



