// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model, madeby, year, maxspeed, engine) {
//     this.model = model;
//     this.producer = madeby;
//     this.year = year;
//     this.maxSpeed =maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину')
//     }
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(key + '-' + this[key]);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//        this.maxSpeed +=newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year=newValue;
//     }
//    this.addDriver = function (Driver) {
//         this.driverName = Driver;
//    }
// }
// let Cars = new Car ('Mitsubishi', 'Germany', 2010 , 200 , 2.5);
// console.log(Cars);
// Cars.drive();
// Cars.info();
// Cars.increaseMaxSpeed(50);
// Cars.changeYear(2020);
// Cars.addDriver('Olya');
// Cars.drive();
// console.log(Cars);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, madeby, year, maxspeed, engine) {
//         this.model = model;
//         this.producer = madeby;
//         this.year = year;
//         this.maxSpeed = maxspeed;
//         this.engine = engine;
//     }
//     drive () {
//             console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину')
//         }
//         info () {
//             for (const key in this) {
//                 if (typeof this[key] !== 'function') {
//                     console.log(key + '-' + this[key]);
//                 }
//             }
//         }
//         increaseMaxSpeed (newSpeed) {
//             this.maxSpeed += newSpeed;
//         }
//         changeYear  (newValue) {
//             this.year = newValue;
//         }
//         addDriver (Driver) {
//             this.driverName = Driver;
//         }
// }
// let Cars = new Car ('Mitsubishi', 'Germany', 2010 , 200 , 2.5);
// console.log(Cars);
// Cars.drive();
// Cars.info();
// Cars.increaseMaxSpeed(50);
// Cars.changeYear(2020);
// Cars.addDriver('Olya');
// Cars.drive();
// console.log(Cars);
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Girl {
//     constructor(girlName, age, feetsize) {
//         this.girlName = girlName;
//         this.age = age;
//         this.feetsize = feetsize;
//     }
// }
// let Girls = [
//     new Girl('Olya', 20, 36),
//     new Girl('Luba', 21, 37),
//     new Girl('Ira', 22, 38),
//     new Girl('Inna', 23, 39),
//     new Girl('Kira', 24, 40),
//     new Girl('Katya', 25, 35),
//     new Girl('Anya', 26, 34),
//     new Girl('Olha', 27, 33),
//     new Girl('Oksana', 28, 41),
//     new Girl('Natalia', 29, 42)
// ];
// class man {
//     constructor(girlName, age, feetsize) {
//         this.girlName = girlName;
//         this.age = age;
//         this.feetsize = feetsize;
//     }
// }
// let Prince = new man ('Anya', 26, 34);
//
// for (const girl of Girls) {
//     if (girl['feetsize']===Prince['feetsize']) {
//         console.log(girl);
//     }
// }
// let princess = Girls.find((girl)=> girl.feetsize === Prince.feetsize);
// console.log(princess);
