// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr=[];
// for (let i=0, x=2; i<50; i++, x=x+2) {
//    arr[i]=x;
// console.log(arr[i]);
// }

// let arr=[];
// for (let i=0, x=1; i<50; i++, x=x+2) {
//    arr[i]=x;
//    console.log(arr[i]);
// }

// let arr=[];
// for (let i=0; i<20; i++) {
//    let x=Math.random()*100;
//    arr[i]=Math.round(x);
//    console.log(arr[i]);
// }

// let arr=[];
// let min=8;
// let max = 732;
// for (let i=0; i<20; i++) {
//    function getRandom (min, max) {
//       return Math.round(Math.random() * (max - min) + min);
//    }
//    arr[i]=getRandom(min, max);
//    console.log(arr[i]);
// }

// 2. Вивести за допомогою console.log кожен третій елемен
// let arr=[];
// for (let i=0, x=2; i<50; i++, x=x+2) {
//    arr[i]=x;
//    if (i%3 === 0) {
//       console.log(arr[i]);
//    }
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr=[];
// for (let i=0, x=2; i<50; i++, x=x+2) {
//    let x=Math.random()*100;
//    arr[i]=Math.round(x);
//    document.write(arr[i]+' ');
//    if (i%3 === 0) {
//       if (arr[i]%2===0) {
//          console.log(arr[i]);
//       }
//    }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr=[];
// for (let i=0, x=2; i<50; i++, x=x+2) {
//    let x=Math.random()*100;
//    arr[i]=Math.round(x);
//    document.write(arr[i]+' ');
//    if (i%3 === 0) {
//       if (arr[i]%2===0) {
//          let array=[];
//          array[i]=arr[i];
//          console.log(array[i])
//       }
//    }
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// let arr=[2, 15, 16, 19, 20, 35, 64, 76, 84];
// for (let i=0; i<arr.length; i++) {
//    if (arr[i]%2 === 0) {
//       if (`${arr[i - 1]}` ==='undefined') {
//          console.log('first element doesnt have previous')
//       } else {
//          console.log(arr[i - 1]);
//       }
//    }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188];
//    let sum = 0;
//    for(let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//    }
//    console.log(sum);
// let avarage;
// avarage = sum/arr.length;
// console.log(avarage);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr=[];
// let array=[];
// for (let i=0; i<20; i++) {
//    let x=Math.random()*100;
//    arr[i]=Math.round(x);
//    console.log(arr[i]);
//    array[i]=arr[i]*5;
//    document.write(`${array[i]} `);
// }

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr=[1, 'djfhf', true, 5, 17, 8, true, 'rfgrf', 'frrfsw'];
// let array=[];
// for (let i=0; i<arr.length; i++) {
//    if (typeof (arr[i]) === 'number') {
//       array[i]=arr[i];
//       console.log(array[i]);
//    }
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
//     let usersWithId = [
//        {id: 1, name: 'vasya', age: 31, status: false},
//        {id: 2, name: 'petya', age: 30, status: true},
//        {id: 3, name: 'kolya', age: 29, status: true},
//        {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//    {user_id: 3, country: 'USA', city: 'Portland'},
//    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//    {user_id: 2, country: 'Poland', city: 'Krakow'},
//    {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let arr = [{},{},{},{}];
// for (let u of usersWithId) {
// for (let c of citiesWithId) {
//    if (u['id'] === c['user_id']) {
//       a = Object.assign(u, c);
//       console.log(a);
//    }
//    }
// }

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr=[1,2,3,4,5,6,7,8,9,10];
// for (let a of arr) {
//    if (a%2===0) {
//       console.log(a);
//    }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let array=[];
// for (let i=0; i<arr.length; i++) {
//       array[i]=arr[i];
//       console.log(array[i]);
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//    let a =  [ 'a', 'b', 'c'];
// let word;
// let sum = '';
// for (let i=0; i<a.length; i++){
//    sum+=a[i];
// }
// word=sum;
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let a =  [ 'a', 'b', 'c'];
// let word;
// let sum = '';
// let i=0;
// while (i<a.length) {
//    sum+=a[i];
//    i++;
// }
// word=sum;
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr =  [ 'a', 'b', 'c'];
// let word;
// let sum = '';
// for (let a of arr) {
//    sum+=a;
// }
// word=sum;
// console.log(word);




