let i =10, j = 20, sum;
function impureAddFunction() { //has side effect
    sum = i + j;
}
//test
impureAddFunction();
console.log(sum);
i = 0;
impureAddFunction(); //same method invocation different result
console.log(sum);

//-------------------------------------

let a = [1];
function impureAddArrayFunction(item) { //No Referential transparency
    sum = a.push(item);
}

//test
impureAddArrayFunction(10);
console.log(a);
impureAddArrayFunction(10); //same method invocation different result
console.log(a);

//-------------------------------------


function pureAddFunction(i,j) {
    return i + j;
}
//test
console.log(pureAddFunction(5,6));
console.log(pureAddFunction(5,6));


//-------------------------------------
let aList=[0,0];
function pureAddArrayFunction(item, list) {
    return list.concat(item);
}

//test
console.log(pureAddArrayFunction(0,aList));
console.log(pureAddArrayFunction(0,aList));

