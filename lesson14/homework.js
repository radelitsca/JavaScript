// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// function wakeUp (time, status) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (time <= 7 && status) {
//         console.log('Its okay');
//         resolve(time);
//       } else {
//         console.log('You are late');
//         reject('It is late');
//       }
//     }, 1000)
//   })
// }
// function brushTeeth (hour, wake) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (wake) {
//         hour = hour + 0.1;
//         resolve(hour);
//       } else {
//       console.log('You are late');
//       reject('It is late');
//     }
//   }, 300)
//   })
// }
// function cookBreakfast (hours) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (hours<=7.2) {
//         hours=hours+0.5;
//         resolve(hours);
//       } else {
//         console.log('You are late');
//         reject('It is late');
//       }
//     }, 500)
//   })
// }
// function dressUp (clock) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (clock<=7.7) {
//         clock=clock+0.2;
//         resolve(clock);
//       } else {
//         console.log('You are late');
//         reject('It is late');
//       }
//     }, 700)
//   })
// }
// function eat (t) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (t<=8) {
//         t=t+0.2;
//         resolve(t);
//       } else {
//         console.log('You are late');
//         reject('It is late');
//       }
//     }, 300)
//   })
// }
// function washDishes (tim) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (tim<=8.2) {
//         tim=tim+0.1;
//         resolve(tim);
//       } else {
//         console.log('You are late');
//         reject('It is late');
//       }
//     }, 300)
//   })
// }
// function toilet (tm) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (tm<=8.3) {
//         tm=tm+0.1;
//         resolve(tm);
//       } else {
//         console.log('You are late');
//         reject('It is late');
//       }
//     }, 100)
//   })
// }
// function cleanShoes (h) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (h<=8.4) {
//         h=h+0.1;
//         resolve(h);
//       } else {
//         console.log('You are late');
//         reject('It is late');
//       }
//     }, 300)
//   })
// }
// function leaveHome (oclock) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (oclock<=8.6) {
//         oclock=oclock+0.3;
//         resolve(oclock);
//       } else {
//         console.log('You are late');
//         reject('It is late');
//       }
//     }, 2000)
//   })
// }
// function Bus (timetable) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (timetable<=9.3) {
//         timetable=timetable+0.2;
//         resolve(timetable);
//       } else {
//         console.log('You are late');
//         reject('It is late');
//       }
//     }, 3000)
//   })
// }
//
//
// async function schedule () {
//   const wake = await wakeUp(7, true);
//   const teeth = await brushTeeth(wake, true);
//   const cooking = await cookBreakfast(teeth);
//   const dress = await dressUp(cooking);
//   const eating = await eat(dress);
//   const washing = await washDishes(eating);
//   const procedure = await toilet(washing);
//   const cleaning = await cleanShoes(procedure);
//   const leaving = await leaveHome(cleaning);
//   const going = await Bus(leaving);
//
// try {
//     console.log(wake);
//     console.log(teeth);
//     console.log(cooking);
//     console.log(dress);
//     console.log(eating);
//     console.log(washing);
//     console.log(procedure);
//     console.log(cleaning);
//     console.log(leaving);
//     console.log(going);
// }
// catch (error) {
//     console.error(error);
// }
//
// }
// schedule();

//
//
// wakeUp(7, true)
//     .then(yourT => {
//       return brushTeeth(yourT, true);
//     })
//     .then(result => {
//       console.log(result);
//       return cookBreakfast(result);
//     })
//     .then(breakfast => {
//       console.log(breakfast);
//       return dressUp(breakfast);
//     })
//     .then(clothes => {
//       console.log(clothes);
//   return eat(clothes);
//     })
//     .then(eating => {
//       console.log(eating);
//       return washDishes(eating);
//     })
//     .then(washing => {
//       console.log(washing);
//       return toilet(washing);
//     })
//     .then(procedures => {
//       console.log(procedures);
//       return cleanShoes(procedures);
//     })
//     .then(clean => {
//       console.log(clean);
//       return leaveHome(clean);
//     })
//     .then(leaving => {
//       console.log(leaving);
//       return Bus(leaving);
//     })
//     .then( busTime => {
//       console.log(busTime);
//     })






// function wakeUp(time, status, callback) {
//     setTimeout(() => {
//         if (time <= 7 && status) {
//             console.log('Its okay');
//             callback(null, 'Its okay', time, status);
//         } else {
//             console.log('You are late');
//             callback('You are late', null, null);
//         }
//     }, 1000)
// }
//
// function brushTeeth(hour, wake, callback) {
//     setTimeout(() => {
//         if (wake) {
//             hour = hour + 0.1;
//             console.log(hour);
//             callback(null, 'its okay', hour);
//         } else {
//             console.log('You are late');
//             callback('You are late', null, null);
//         }
//     }, 300)
// }
//
// function cookBreakfast(hours, callback) {
//         setTimeout(() => {
//             if (hours <= 7.2) {
//                 hours = hours + 0.5;
//                 console.log(hours);
//                 callback(null, 'its okay', hours);
//             } else {
//                 console.log('You are late');
//                 callback('You are late', null, null);
//             }
//         }, 500)
// }
//
// function dressUp(clock, callback) {
//     setTimeout(() => {
//         if (clock <= 7.7) {
//             clock = clock + 0.2;
//             console.log(clock);
//             callback(null, 'its okay', clock);
//         } else {
//             console.log('You are late');
//             callback('You are late', null, null);
//         }
//     }, 700)
// }
//
// function eat(t, callback) {
//     setTimeout(() => {
//         if (t <= 8) {
//             t = t + 0.2;
//             console.log(t);
//             callback(null, 'its okay', t);
//         } else {
//             console.log('You are late');
//             callback('You are late', null, null);
//         }
//     }, 300)
// }
//
// function washDishes(timt, callback) {
//     setTimeout(() => {
//         if (timt <= 8.2) {
//             timt = timt + 0.1;
//             console.log(timt);
//             callback(null, 'its okay', timt);
//         } else {
//             console.log('You are late');
//             callback('You are late', null, null);
//         }
//     }, 300)
// }
//
// function toilet(tm, callback) {
//         setTimeout(() => {
//             if (tm <= 8.3) {
//                 tm = tm + 0.1;
//                 console.log(tm);
//                 callback(null, 'its okay', tm);
//             } else {
//                 console.log('You are late');
//                 callback('You are late', null, null);
//             }
//         }, 100)
//
// }
//
// function cleanShoes(h, callback) {
//         setTimeout(() => {
//             if (h <= 8.4) {
//                 h = h + 0.1;
//               console.log(h);
//                 callback(null, 'its okay', h);
//             } else {
//                 console.log('You are late');
//                 callback('You are late', null, null);
//             }
//         }, 300)
// }
//
// function leaveHome(oclock, callback) {
//         setTimeout(() => {
//             if (oclock <= 8.6) {
//                 oclock = oclock + 0.3;
//                 console.log(oclock);
//                 callback(null, 'its okay', oclock);
//             } else {
//                 console.log('You are late');
//                 callback('You are late', null, null);
//             }
//         }, 2000)
// }
//
// function Bus(timetable) {
//         setTimeout(() => {
//             if (timetable <= 9.3) {
//                 timetable = timetable + 0.2;
//               console.log(timetable);
//               console.log('You will be on time')
//             } else {
//                 console.log('You are late');
//             }
//         }, 3000)
// }
//
// wakeUp(7, true, (error, yes, hour, wake ) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(yes);
//     }
//     brushTeeth(hour, wake, (error, yes, hours) => {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log(yes);
//         }
//         cookBreakfast(hours, (error, yes, clock)=> {
//             if (error) {
//                 console.error(error);
//             } else {
//                 console.log(yes);
//             }
//             dressUp (clock, (error, yes, t) => {
//                 if (error) {
//                     console.error(error);
//                 } else {
//                     console.log(yes);
//                 }
//                 eat(t, (error, yes, timt)=> {
//                     if (error) {
//                         console.error(error);
//                     } else {
//                         console.log(yes);
//                     }
//
//                 washDishes(timt, (error, yes, h) => {
//                     if (error) {
//                         console.error(error);
//                     } else {
//                         console.log(yes);
//                     }
//                     cleanShoes(h, (error, yes, oclock) => {
//                         if (error) {
//                             console.error(error);
//                         } else {
//                             console.log(yes);
//                         }
//                         leaveHome(oclock, (error, yes, timetable) =>{
//                             if (error) {
//                                 console.error(error);
//                             } else {
//                                 console.log(yes);
//                             }
//                             Bus(timetable);
//                         })
//                     })
//                 })
//                 })
//             })
//         })
//     })
// })

