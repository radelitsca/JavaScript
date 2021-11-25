// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let length = (a) => console.log(a.length);
// let greeting = 'hello world';
// let text = 'lorem ipsum';
// let impression = 'javascript is cool';
// length(greeting);
// length(text);
// length(impression);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let greeting = 'hello world';
// let text = 'lorem ipsum';
// let impression = 'javascript is cool';
// let upper = (a) => console.log(a.toUpperCase());
// upper(greeting);
// upper(text);
// upper(impression);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let greeting = 'HELLO WORLD';
// let text = 'LOREM IPSUM';
// let impression = 'JAVASCRIPT IS COOL';
// let low = (a) => console.log(a.toLowerCase());
// low(greeting);
// low(text);
// low(impression);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// let check = (a) => console.log(a.trim());
// check(str);
// console.log(str);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let stringtoarray = (st) => st.split(' ')
// let arr = stringtoarray(str);
// console.log(arr);
// document.write(arr);
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// let delete_characters = (st, num) => {
//     return st.substring(0, num);
// }
// document.write(delete_characters(str, 7));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// let insert_dash = (s) => s.toUpperCase().replaceAll(' ', '-')
// document.writeln(insert_dash(str));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'hallo';
// let firstUpper = (s) => {
//     return s[0].toUpperCase() + s.substring(1);
// }
// let strup = firstUpper(str);
// console.log(strup);
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     let arr = str.split(' ');
//     let result = [];
//     console.log(arr);
//     for (let i =0; i<=arr.length - 1; i++){
//         let newarr = arr[i][0].toUpperCase()+ arr[i].substring(1);
//         result.push(newarr);
//     }
//     console.log(result);
//     return result.join(' ');
// }
// let capitalized = capitalize('the sun rises in the east');
// console.log(capitalized);
