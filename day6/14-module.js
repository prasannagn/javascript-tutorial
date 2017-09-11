let os = require('os');
console.log(os.hostname());

let m = require('./lib/TestModule');
console.log(m.square(10));
console.log(m.bar);


let square = require('./lib/TestModule').square;
console.log(square(100));
