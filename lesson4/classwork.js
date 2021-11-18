// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min (a, b, c) {
// if (a>b && c<b){
//     console.log(c);
// } else if (a>b && c>b){
//     console.log(b);
// } else if (b>a && c<a){
//     console.log(c);
// } else if (c>a && a>b) {
//     console.log(b);
// } else if (c>a && b>a && c>b) {
//         console.log(a);
// }
// }
// min (20, 30, 10);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max (a, b, c) {
// if (a>b && c<b){
//     console.log(a);
// } else if (a>b && c>b && a>c){
//     console.log(a);
// } else if (a>b && c>b && c>a){
//     console.log(c);
// } else if (b>a && c<a){
//     console.log(b);
// } else if (b>a && a<c && c>b){
//     console.log(c);
// } else if (b>a && a<c && b>c){
//     console.log(b);
// } else if (c>a && a>b) {
//     console.log(c);
// } else if (c>a && b>a && c>b) {
//         console.log(с);
// } else if (c>a && b>a && b>c) {
//         console.log(b);
// }
// }
// max (30, 15, 10);

// - створити функцію яка повертає найбільше число з масиву;
// function max_array (array) {
//     let max;
//     max=array[0];
//     for (let i=1; i<array.length; i++) {
//     if (array[i]>max) {
//         max = array [i];
//     }
//     }
//     return max;
// }
// let x = max_array([10, 20, 30, 40, 50]);
// console.log(x);

// - створити функцію яка повертає найменьше число з масиву
// function min_array (array) {
//     let min;
//     min=array[0];
//     for (let i=1; i<array.length; i++) {
//     if (array[i]<min) {
//         min = array [i];
//     }
//     }
//     return min;
// }
// let x = min_array([10, 20, 30, 40, 5]);
// console.log(x);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад [1,2,10]->13
// function sum (array) {
//     let s;
//     s=array[0];
//     for (let i=1; i<array.length; i++) {
//         s = s + array[i];
//     }
//     return s;
// }
// let x = sum([1, 2, 3, 4, 5]);
// console.log(x);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sum (array) {
//     let s;
//     s=array[0];
//     for (let i=1; i<array.length; i++) {
//         s = s + array[i];
//     }
//     let sa=s/array.length;
//     return sa;
// }
// let x = sum([1, 2, 3, 4, 5]);
// console.log(x);

// - створити функцію яка приймає будь-яку кількість чисел,
//     повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function min_max () {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item < min) {
//             min=item;
//         }
//         if (item > max) {
//             max = item;
//         }
//     }
//     console.log(max);
//     return min;
//
// }
// let x = min_max(1, 2, 3, 4, 5, 6, 7);
// document.write(x);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function random (num) {
//     let arr = [];
//     for (let i=0; i<num; i++) {
//         arr[i]=Math.round(Math.random()*100);
//     }
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// random (10);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//     який характеризує кінцеве значення діапазону.
// function random (num, limit) {
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
// function reverse (array) {
//     let arr=[];
//     for (let x = 0, i=array.length-1; x<array.length, i>=0;i--, x++) {
//             arr[i]=array[x];
//     }
//     for (let i = 0; i<arr.length; i++) {
//        console.log(arr[i]);
//         }
// }
// reverse ([1, 3, 5, 7, 9]);










