const list = [2, 39, 4.3, 8, 45, 7, 10];

const doubleList = list.map((i) => i * 2);
console.log(doubleList);


const greaterThan10List = list.filter((i) => i > 10);
console.log(greaterThan10List);

const sum = list.reduce((accum, item) => accum + item);
console.log(sum);

const result = list.find((i)=> i === 8);
console.log(result);

const every = list.every((i)=> i > 0);
console.log(every);

const everyFalse = list.every((i)=> i > 10);
console.log(everyFalse);

const some = list.some((i)=> i > 10);
console.log(some);

const someFalse = list.some((i)=> i < 0);
console.log(someFalse);

//Deduct 1 and sum the multiples of 3
let finalResult = list.map((i)=>i - 1).filter((j)=>j % 3 === 0).reduce((acc, k)=>acc + k, 0);
console.log(finalResult);

const deductByOne = (i)=> i - 1;
const dividedByThree = (i)=> i % 3 === 0;
const add = (i, j)=> i + j;

finalResult = list.map(deductByOne)
                    .filter(dividedByThree)
                    .reduce(add, 0);
console.log(finalResult);



var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
console.log([...lyrics]);