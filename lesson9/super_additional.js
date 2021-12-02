// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let arr = [];
// for (const user of users) {
//     arr.push(user.address);
// }
// console.log(arr);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let userDiv = document.createElement('div');
//     userDiv.innerText = `${user.name}, ${user.age}, ${user.status}, address: ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}`
//     document.body.appendChild(userDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let userDiv = document.createElement('div');
//    let userName = document.createElement('div');
//    userName.innerText = user.name;
//     let userage = document.createElement('div');
//     userage.innerText = user.age;
//     let userstatus = document.createElement('div');
//     userstatus.innerText = user.status;
//     let useraddress = document.createElement('div');
//     useraddress.innerText = `Address: ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}`
//
//     userDiv.append(userName, userage, userstatus, useraddress);
//     document.body.appendChild(userDiv);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const user of users) {
//     let userDiv = document.createElement('div');
//    let userName = document.createElement('div');
//    userName.innerText = user.name;
//     let userage = document.createElement('div');
//     userage.innerText = user.age;
//     let userstatus = document.createElement('div');
//     userstatus.innerText = user.status;
//     let useraddress = document.createElement('div');
//     let city = document.createElement('div');
//     city.innerText = user.address.city;
//     let country = document.createElement('div');
//     country.innerText = user.address.country;
//     let street = document.createElement('div');
//     street.innerText = user.address.street;
//     let houseNum = document.createElement('div');
//     houseNum.innerText = user.address.houseNumber;
//
//     useraddress.append(city, country, street, houseNum);
//     userDiv.append(userName, userage, userstatus, useraddress);
//     document.body.appendChild(userDiv);
// }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let hElements = document.querySelectorAll('h2');
// console.log(hElements);
// let arr = [];
// for (let elem of hElements) {
//     arr.push(elem.innerHTML);
// }
// console.log(arr);
// let idElement = document.getElementById('content');
// let heading = document.createElement('h3');
// heading.innerText = 'Зміст';
// idElement.appendChild(heading);
// for (const item of arr) {
//     let ul = document.createElement('ul');
//     let li = document.createElement('li');
//     li.innerText = item;
//     ul.appendChild(li);
//     idElement.appendChild(ul);
// }

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
// let h1 = document.createElement('h1');
// h1.innerText = 'Правила бойцовского клуба';
// document.body.appendChild(h1);
// for (const rule of rules) {
//     let wrap = document.createElement('div');
//     let h2 = document.createElement('h2');
//     h2.innerText = rule.title;
//     let p = document.createElement('p');
//     p.innerText = rule.body;
//
//     wrap.append(h2, p);
//     document.body.appendChild(wrap);
// }