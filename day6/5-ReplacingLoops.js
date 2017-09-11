const list = [8, 12, 20, 48, 84];

for (let i = 0; i < list.length; i++) {
    const item = list[i];
    console.log('for loop' + item);
}

let i = list.length;
while (i--) {
    const item = list[i];
    console.log('while loop' + item);
}

function every(predicate, list, offset = 0) {
    let allPassing = true;
    for (let i = offset; i < list.length; i++) {
        const item = list[i];
        if (!predicate(item)) {
            allPassing = false;
            break;
        }
    }
    return allPassing;
}


function some(predicate, list, offset = 0) {
    let somePassing = false;
    let i = list.length;
    while (i >= offset) {
        i--;
        const item = list[i];
        if (predicate(item)) {
            somePassing = true;
            break;
        }
    }
    return somePassing;
}

//TEST
const greaterThan10 = (n) => n > 10;
const lessThan30 = (n) => n < 30;

console.log(every(greaterThan10, list, 0));
console.log(every(greaterThan10, list, 1));
console.log(every(lessThan30, list, 0));

console.log(some(greaterThan10, list, 0));
console.log(some(lessThan30, list, 0));
console.log(some(lessThan30, list, 5));


//Recursive
function everyWithoutLoop(predicate, [item, ...list]) {
    if (list.length) {
        return predicate(item) ? everyWithoutLoop(predicate, list) : false;
    }
    return true;
}

function someWithoutLoop(predicate, [item, ...list]) {
    if (list.length) {
        return predicate(item) ? true : someWithoutLoop(predicate, list);
    }
    return false;
}

const greaterThan5 = (n) => n > 5;
const lessThan5 = (n) => n < 5;

console.log(everyWithoutLoop(greaterThan5, list, 0));
console.log(everyWithoutLoop(lessThan30, list, 0));

console.log(someWithoutLoop(greaterThan10, list, 0));
console.log(someWithoutLoop(lessThan5, list, 0));
