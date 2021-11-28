// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// class Object {
//     constructor(id, uname, username, email, adress, phone, website, company) {
//         this.id = id;
//         this.name = uname;
//         this.username = username;
//         this.email = email;
//         this.adress = adress;
//         this.phone = phone;
//         this.website=website;
//         this.company=company;
//     }
// }
// function adress (street, suite, city, zipcode, geo) {
//     this.street = street;
//     this.suite = suite;
//     this.city = city;
//     this.zipcode = zipcode;
//     this.geo=geo;
// }
// function geo (lat, lng) {
//     this.lat = lat;
//     this.lng= lng;
// }
// function company (name, catchPhrase, bs) {
//     this.name=name;
//     this.catchPhrase=catchPhrase;
//     this.bs=bs;
// }
// let Person = new Object( 1, 'Leanne Graham','Bret', 'Sincere@april.biz', new adress ('Kulas Light', 'Apt. 556','Gwenborough','92998-3874', new geo('-37.3159','81.1496')), '1-770-736-8031 x56442','hildegard.org', new company('Romaguera-Crona','Multi-layered client-server neural-net', 'harness real-time e-markets'));
// console.log(Person);

// class tag {
//     constructor(title , action, attribute) {
//         this.title=title;
//         this.action = action;
//         this.attribute = attribute;
//     }
// }
//
// function attribute (titleofattr, actionofattr) {
//     this.title = titleofattr;
//     this.action = actionofattr;
// }
// let a = new tag('a', 'предназначен для создания ссылок', [new attribute('download', 'Предлагает скачать указанный по ссылке файл'), new attribute('href', 'Задает адрес документа, на который следует перейти')]);
// console.log(a);
// let div = new tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [new attribute('align', 'Задает выравнивание содержимого тега <div>.'), new attribute('title', 'Добавляет всплывающую подсказку к содержимому.')]);
// console.log(div);
// let h1 = new tag('h1', ' тег <h1> представляет собой наиболее важный заголовок первого уровня', [new attribute('align', 'Определяет выравнивание заголовка'), new attribute('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.')]);
// console.log(h1);
// let span = new tag('span', 'Тег <span> предназначен для определения строчных элементов документа.', [new attribute('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'), new attribute('dir', 'Задает направление и отображение текста — слева направо или справа налево.')]);
// console.log(span);
// let input = new tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [new attribute('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'), new attribute('autofocus', 'Устанавливает фокус в поле формы.')]);
// console.log(input);
// let form = new tag('form', 'Тег <form> устанавливает форму на веб-странице.', [new attribute('accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'), new attribute('autocomplete', 'Включает автозаполнение полей формы.')]);
// console.log(form);
// let option = new tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [new attribute('disabled', 'Заблокировать для доступа элемент списка.'), new attribute('label', 'Указание метки пункта списка.')]);
// console.log(option);
// let select = new tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', [new attribute('name', 'Имя элемента для отправки на сервер или обращения через скрипты.'), new attribute('size', 'Количество отображаемых строк списка.')]);
// console.log(select);



