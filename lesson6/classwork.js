// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let check = (str, sym) => {
//     let result = [];
//     if (str.includes(sym)) {
//         let str2 = str.split(sym);
//         str2.forEach((item) => {
//                         if (item) result.push(item);
//                     })
//                     console.log(result.join(' '))
//                 }
// }
// check (n3, '_');
// check (n2, '-');
// check (n1, '.');
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random = (number) => {
//     let arr = [];
//     for (let i=0; i<number; i++) {
//         let x = Math.round(Math.random() * 100);
//         arr.push(x);
//     }
//     return arr;
// }
// let list = random(10);
// console.log(list);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// let random = (number) => {
//     let arr = [];
//     for (let i=0; i<number; i++) {
//         let x = Math.round(Math.random() * 100);
//         arr.push(x);
//     }
//     return arr;
// }
// let list = random(10);
// console.log(list);
// list.sort((n1, n2) => {
//     return n1-n2;
// })
// console.log(list);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let random = (number) => {
//     let arr = [];
//     for (let i=0; i<number; i++) {
//         let x = Math.round(Math.random() * 100);
//         arr.push(x);
//     }
//     return arr;
// }
// let list = random(10);
// console.log(list);
// list.sort((n1, n2) => {
//     return n1-n2;
// })
// console.log(list);
// let f = list.filter(item =>item%2===0);
// console.log(f);
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let random = (number) => {
//     let arr = [];
//     for (let i=0; i<number; i++) {
//         let x = Math.round(Math.random() * 100);
//         arr.push(x);
//     }
//     return arr;
// }
// let list = random(10);
// console.log(list);
// let string = list.map(item => {
//     return item.toString();
// })
// console.log(string);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let sortNums = (direction, arr) => {
//     if (direction === 'ascending') {
//         arr.sort((a1, a2) => a1-a2);
//     } else if (direction === 'descending') {
//         arr.sort((a1, a2) => a2-a1);
//         } else {
//         console.log('incorrect direction')
//     }
//     return arr;
// }
// let sortNums1 = sortNums('descending', [1, 5, 3, 2, 7, 0, 4]);
// console.log(sortNums1);

//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sort = (array) => {
//         array.sort((i1, i2)=> i2.monthDuration-i1.monthDuration);
//     return array;
// }
// let sort1 = sort(coursesAndDurationArray);
// console.log(sort1);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = sort1.filter(item => item.monthDuration>5);
// console.log(filter);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//     let result =[];
//     for (let i=0; i<str.length; i+=n) {
//         result.push(str.substr(i, n));
//     }
// return result;
// }
// let cutString1 = cutString('happiness', 3);
// console.log(cutString1);
