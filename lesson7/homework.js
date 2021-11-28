// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (userID, userName, userSurname, useremail, userphone) {
//     this.id = userID;
//     this.username=userName;
//     this.surname = userSurname;
//     this.email=useremail;
//     this.phone = userphone;
// }
// let users = [
//     new User (1, 'vasya', 'kot', 'kot@gmail.com', 1423),
//     new User (20, 'ira', 'pop', 'pop@gmail.com', 1234),
// new User (3, 'vas', 'trop', 'trop@gmail.com', 3213),
// new User (44, 'asya', 'fan', 'fan@gmail.com', 1253),
// new User (5, 'lesya', 'lord', 'lord@gmail.com', 1323),
// new User (12, 'vanya', 'rada', 'rada@gmail.com', 1273),
// new User (7, 'olya', 'pada', 'pada@gmail.com', 1283),
// new User (15, 'kolya', 'pupkin', 'pupkin@gmail.com', 1923),
// new User (9, 'anya', 'kotov', 'kotov@gmail.com', 1230),
// new User (10, 'oksana', 'solo', 'solo@gmail.com', 1023)
// ]
// console.log(users);
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter(item => item.id%2===0);
// console.log(filter);
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((item1, item2)=> item1['id']-item2['id']);
// console.log(sort);
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// class Client extends User {
//     constructor(userID, userName, userSurname, useremail, userphone, goods) {
//         super(userID, userName, userSurname, useremail, userphone);
//         super.order = goods;
//     }
// }
// let Clients = [
//     new Client (1, 'vasya', 'kot', 'kot@gmail.com', 1423, ['tea', 'coffee']),
//     new Client (20, 'ira', 'pop', 'pop@gmail.com', 1234, ['tomatoes']),
//     new Client (3, 'vas', 'trop', 'trop@gmail.com', 3213, ['orange', 'potatoes', 'chips']),
//     new Client (44, 'asya', 'fan', 'fan@gmail.com', 1253, ['tea', 'water', 'eggs']),
//     new Client (5, 'lesya', 'lord', 'lord@gmail.com', 1323, ['tea', 'water']),
//     new Client (12, 'vanya', 'rada', 'rada@gmail.com', 1273, ['tea', 'water', 'eggs', 'cabbage']),
//     new Client (7, 'olya', 'pada', 'pada@gmail.com', 1283, ['eggs']),
//     new Client (15, 'kolya', 'pupkin', 'pupkin@gmail.com', 1923, ['tea', 'water', 'eggs', 'meat', 'fish']),
//     new Client (9, 'anya', 'kotov', 'kotov@gmail.com', 1230, ['tea', 'eggs']),
//     new Client (10, 'oksana', 'solo', 'solo@gmail.com', 1023, ['tea', 'water', 'eggs', 'coffee'])
// ]
// console.log(Clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort2=Clients.sort((cl1, cl2) => cl1.order.length - cl2.order.length);
// console.log(sort2);