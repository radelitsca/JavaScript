// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let  min = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// min (20, 50, 10);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// max (20, 5, 10);
// - створити функцію яка повертає найбільше число з масиву
// let maxarr = (array) => {
//     let max= array[0];
//     for (let i=1; i<array.length; i++) {
//         if (array[1]>max) {
//             max=array[i];
//         }
//     }
//     console.log(max);
// }
// let x = maxarr([10, 9, 7, 0, 6, 5,4,3]);
// - створити функцію яка повертає найменьше число з масиву
// let minarr = (array) => {
//     let min= array[0];
//     for (let i=1; i<array.length; i++) {
//         if (array[1]<min) {
//             min=array[i];
//         }
//     }
//     console.log(min);
// }
// let x = minarr([10, 9, 7, 0, 6, 5,4,3]);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sum = (array) => {
//     let s;
//     s=array[0];
//     for (let i=1; i<array.length; i++) {
//         s = s + array[i];
//     }
//     return s;
// }
// let x = sum([1, 6, 3, 4, 5]);
// console.log(x);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let sumavarage = (array) => {
//     let s;
//     s=array[0];
//     for (let i=1; i<array.length; i++) {
//         s = s + array[i];
//     }
//     return s/array.length;
// }
// let x = sumavarage([1, 6, 3, 4, 5]);
// console.log(x);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let min_max = (...xxx) => {
//     let min = xxx[0];
//     let max = xxx[0];
//     for (const item of xxx) {
//         if (item < min) {
//             min=item;
//         }
//         if (item > max) {
//             max = item;
//         }
//     }
//     console.log(max);
//     return min;
// }
// let x = min_max(1, 2, 3, 4, 5, 6, 7);
// document.write(x);
// - створити функцію яка заповнює масив рандомними числами
// let random = (num) => {
//     let arr = [];
//     for (let i=0; i<num; i++) {
//         arr[i]=Math.round(Math.random()*100);
//     }
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// random (10);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let random = (num, limit) => {
//     let arr = [];
//     for (let i=0; i<num; i++) {
//         arr[i]=Math.round(Math.random()*limit);
//     }
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// random (10, 40);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reverse = (array) => {
//     let arr=[];
//     for (let x = 0, i=array.length-1; x<array.length, i>=0;i--, x++) {
//             arr[i]=array[x];
//     }
//     for (let i = 0; i<arr.length; i++) {
//        console.log(arr[i]);
//         }
// }
// reverse ([1, 2, 5, 4, 9]);