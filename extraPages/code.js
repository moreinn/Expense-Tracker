// functions console.log / return 

/*

function  add(a, b){
    return a + b;
}

console.log(add(2, 3))
/*
function greet(name){
    console.log(`hello ${name}`);
}

greet("kunnu")
*/
function double(num){
    return num * 2;
}

console.log(double(10))

function isEven(n){
    return n % 2 === 0;
}

console.log(isEven(19));

function fullName(first, last){
    return first + " " + last;
}

console.log(fullName("Moin", "Shaikh"));


function demo(){
    console.log([10,20]);
    return [30.40];
}
//let x = demo();
console.log(demo())


//arrays
/*

let nums = [];

console.log(nums[0])

/*
for(let i = 0; i < nums.length; i++ ){
    console.log(nums[i])
}

function getFirst(arr){
    return arr[0]
}

console.log(getFirst([16, 21, 27]));

*/

let students = ["Amit","Rahul","Neha"];

function printAll(arr){
console.log(arr)
}
printAll(students)

function test(x){
    console.log(x)
}

test([1, 2, 3])

function getFirst(arr){
    return arr[0]
}

/*
let result = getFirst(["A", "B", "C"]);
console.log(result)

//MAP , FILTER , REDUCE

//Map
let num = [1, 2, 3,];

let num2 = num.filter(n => n <= 1);

console.log(num2);

//Filter

let filli = [1, 2, 3, 4, 5];

const filliN = filli.filter(n => n % 2 === 0);
console.log(filliN)

//Reduce

/*

let number = [10, 20, 30];

let sum = number.reduce((total, n) => total + n, 0)

console.log(sum)

let prices = [100, 200, 300];
let discount = prices.map(p => p * 0.10)
console.log(discount);



let prices = [100, 200, 300];
let discount = prices.filter(num => num >= 150);

console.log(discount)



let prices = [100, 200, 300];

let discount = prices.reduce((total, n) => total + n, 0);

console.log(discount)
*/
let nums = [1, 2, 3, 4];

let result = nums
.filter(n => n % 2 === 0)
.map(n => n * 10)
.reduce((t, n) => t + n, 0);

console.log(result)

const expenses = [
    {amount:300,  description: "Book "},
    {amount:450,  description: "Shirt "},
    {amount:1500, description: "Food "},
    {amount:250,  description: "Cab "}
];

/*
for(let i = 0; i < expenses.length; i++){
    const expense = expenses[i];
    console.log(`${expense.description}  - ₹${expense.amount}`);
}*/
/*
for(const expense of expenses){
    console.log(`${expense.description}  - ₹${expense.amount}`)
}
    */
expenses.forEach((expense) => {
    console.log(`${expense.description}  - ₹${expense.amount}`)
})