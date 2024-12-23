console.log("Hello Node.js...!");

let a = 10;
console.log(a);

let arr = [10, 20, 30, 40, 50];
console.log(`Array :-${arr}`);

let arr1 = [60, 70, 99, 90, 100];
let ans = arr1.filter((val) => {
    return val % 2 == 0;
})
console.log(`Even :- ${ans}`);