//arity

function test(a,b,c) {
    console.log("Test fun");
}

console.log("Arity of function test:..", test.length);


function testWithExtra(a,e=0) {
    console.log("Test fun");
}

console.log("Arity of function testWithExtra:..", testWithExtra.length);


//Partial application

// function sentence(who, what, where, when) {
//     console.log(who, ' is ', what, ' from ', where , ' as of ', when);
// }
//
// const part1 = sentence('prsanna');
// const part2 =  part1('engineer');
// const part3 = part2('VTU');
// const part4 = part3('today');
//
// console.log(part4);
//


function example(a,b) {
    console.log({a,b});
}

//TEST

example(1,'a');
example.call(null,2,'b');
example.apply(null,[3,'c']);
example.bind(null,4)('d');