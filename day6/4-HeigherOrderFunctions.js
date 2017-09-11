const kiss = (a) => {
    return a !== 'frog' ? a : 'prince';
};

function transform(thing, changeFn) { //higher order function
    return changeFn(thing);
}

console.log(transform('frog', kiss));
console.log(transform('sky', kiss));


function getter(prop) {
    return (obj) => isObject(obj) ? obj[prop] : undefined;
}

//higher order functions
const name = getter('name');
const age = getter('age');
const score = getter('score');

let person = {
    name : 'prasanna',
    age : 10
};

//TEST

console.log(name(person));
console.log(age(person));
console.log(score(person));
console.log(name(1));

function isObject(a) {
    return (!!a) && (a.constructor === Object);
}