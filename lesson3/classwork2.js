// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<h2>Template 1.1 </h2>`)
// document.write(`<ul>`)
// for (let i=0; i<=listOfItems.length-1;i++){
//     document.write(`<li>`)
//     document.write(listOfItems[i]);
//     document.write(`</li>`);
// }
// document.write(`</ul>`);
//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// document.write(`<h2>Template 2.1 </h2>`);
// document.write(`<div>`)
// for (let i = 0; i < simpsons.length; i++) {
//     const simpson = simpsons[i];
//     document.write(`${simpson['name']}`);
//     document.write(` ${simpson['surname']}`);
//     document.write(' Age is '+simpson['age']+'. ');
//     document.write(simpson['info']);
//     document.write(`<div>`)
//     document.write(`<img class="img" src="${simpson['photo']}" alt="">`);
//     document.write(`</div>`);
// }
// document.write(`</div>`);

// document.write(`<h2>Template 2.2 </h2>`);
// for (let i = 0; i < simpsons.length; i++) {
//     const simpson = simpsons[i];
//     document.write(`<div>`)
//     document.write(`<h2>${simpson['name']} ${simpson['surname']}. Age is ${simpson['age']}.</h2>`);
//     document.write(`<p> ${simpson['info']}</p>`);
//     document.write(`<img class="img" src="${simpson['photo']}" alt="">`);
//     document.write(`</div>`);
// }

// document.write(`<h2>Template 2.3 </h2>`);
// document.write(`<div>`)
// for (let i = 0; i < simpsons.length; i++) {
//     const simpson = simpsons[i];
//     document.write(`<div>`)
//     document.write(`<h2>${simpson['name']}  ${simpson['surname']}. Age is ${simpson['age']}.</h2>`);
//     document.write(`<p> ${simpson['info']}</p>`);
//     document.write(`<img class="img" src="${simpson['photo']}" alt="">`);
//     document.write(`</div>`);
// }
// document.write(`</div>`);

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// document.write(`<h2>Template 3.1 </h2>`);
// document.write(`<div>`)
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     document.write(`<div>`)
//     document.write(`<h3>${product['title']} Price - ${product['price']}</h3>`);
//     document.write(`<img class="img" src="${product['image']}" alt="">`);
//     document.write(`</div>`);
// }
// document.write(`</div>`);






