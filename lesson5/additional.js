// - Дано натуральное число n. Выведите все числа от 1 до n.
// let num = (n) => {
//     for (let i=1; i<=n; i++) {
//         console.log(i);
//     }
// }
// num(10);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let output = (x,y) => {
    for (let i = x; i <= y; i++) {
        console.log(i);
    }
}
let nums = (a, b) => {
    if (a<b) {
        output(a,b);
        }  else if (a>b) {
        output(b,a);
        } else {
        console.log('Invalid params');
    }
}
nums(10, 20);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let change = (array, i) => {
//     if (i>=array.length-1) {
//         console.log('Not enough elements');
//     }else {
//         let x = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = x;
//     }
//     return array;
// }
// let result = change([9,8,0,4], 2);
// console.log(result);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let nums = [0, 3, 5, 0, 6, 0, 7];
// let result = () => {
//   for (let i = 0; i<nums.length; i++) {
//       if (nums[i]===0) {
//           let b = nums.splice(i, 1);
//           nums.push(0);
//       }
//   }
//     console.log(nums);
// }
// result();
