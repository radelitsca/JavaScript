// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let form = document.forms.input;
// form.onsubmit = e => {
//     e.preventDefault();
//     let uname = this.username.value;
//     let age = this.age.value;
//     let user = {name: uname, age: age};
//     localStorage.setItem('user', JSON.stringify(user));
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let form = document.forms.input;
// form.onsubmit = e => {
//     e.preventDefault();
//     let model = this.carmodel.value;
//     let type = this.type.value;
//     let volume = this.volume.value;
//     let carItem = [{model: model}, {type: type}, {volume: volume}];
//     let car = JSON.parse(localStorage.getItem('car')) || [];
//     if ( localStorage.getItem('car') === null) {
//         car = [];
//         car.push(carItem);
//         localStorage.setItem('car', JSON.stringify(car));
//     } else {
//         car = JSON.parse(localStorage.getItem('car'));
//         car.push(carItem);
//         localStorage.setItem('car', JSON.stringify(car));
//
//     }
// }


