// 48 task starts 

// let inputString = "George Raymond Richard Martin";
// let CapitalLetters = inputString.split(' ').map(word => word.charAt(0)).join('');

// console.log(CapitalLetters); 

// 48 task ends

// 49 task starts

// let people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

// people.sort((a, b) => a.age - b.age);

// const ageDifference = people[people.length - 1].age - people[0].age;

// console.log(ageDifference); 

// 49 task ends
// 64 task starts 
// function areArraysEqual(a , b) {
//     if (a.length !== b.length) return false; 
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) return false;
//     }
//     return true; 
// }

// console.log(areArraysEqual([1,2,3], [1,2,3])); 
// console.log(areArraysEqual([1,2], [1, false,2])); 
// console.log(areArraysEqual([1,2,1], [1,2,2])); 

// 64 task ends

// 65 task starts 

    // let obj = {a: 2, b:4, c: 8, d: 9, e: 10};
    // let result = Object.entries(obj).map(([a,b]) => `${a} ${b}`)
    // console.log(result); 
// 65 task ends
// 68 task starts 
// function getTruthyFalsyCount(arr) {
//   const truthy  = arr.filter((item) => item);
//   const falsy = arr.filter((item) => !item);

//   return (`truthy qiymatlari ${truthy} falsy qiymatlari ${falsy}`);
// }
// console.log(getTruthyFalsyCount([false, 1, 10, 0.1, "sultonqul", 1.13, 0]))

//68 task ends


//44 task starts

// function getLevel (n) {

//     let result = []

//     for (let i = 0; i <= n; i++) {
//         result.push(Math.pow(2,i))
//     }
//     return result
// }

// console.log(getLevel(5));

// 44 task ends


//43 task starts

// function findNNumber(obj, n) {
//     const result = {};

//     for (const key in obj) {
//         result[key] = obj[key] * n;
//     }

//     return result;
// }

// const obj = { a: 3, b: 4, c: 5, d: 6 };
// const n = 5;

// console.log(findNNumber(obj, n));

// 43 task ends

// 42 task starts


// let array = ["text", "world", "laptop", "Web Programming", "HTML", "CSS", "JavaScript", "React", "Node.js"];
// let length = 0
// for (let i = 0; i < array.length; i++) {
//     length = array[i].length
//     console.log(`${array[i]} ${length}`);
// }

//42 task ends

//  40 task starts 

// function findMiddleNumber(arr) {
//     arr.sort((a, b) => a - b);
//     const middleIndex = Math.floor(arr.length / 2);
//     if (arr.length % 2 !== 0) {
//         return arr[middleIndex];
//     } else {
//         const middleNumber = (arr[middleIndex - 1] + arr[middleIndex]) / 2;
//         return middleNumber;
//     }
// }
// const arr1 = [1, 2, 3, 4, 5];
// const middleNumber1 = findMiddleNumber(arr1);
// console.log(`ortadagi son ${middleNumber1}`);  
// const arr2 = [1, 2, 3, 4];
// const middleNumber2 = findMiddleNumber(arr2);
// console.log(` ortadagi son ${middleNumber2}`); 

// 40 task finished 

// 38 task starts


// function findStrA (params) {
//     let a = 0

//     let arr = Array.from(params)

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "a" ||  arr[i] == "A"){
//             a++
//         }
//     }
//     return `kiritilgan so'zda ${a} ta a bor `
// }

// console.log(findStrA("agar sozda nechta a bor ekanini topishing kerak "));

// 38 task ends