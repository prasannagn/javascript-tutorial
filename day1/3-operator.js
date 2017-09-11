var s1 = 'one';
var s2 = "two";
var s3 = "one";

if(s1==s2){
	console.log("== :", false);
}

if(s1===s3){
	console.log("== :", true);
}


if(s1 !==s2){
	console.log("== :", false);
}


console.log("'1' == 1", '1' == 1);
console.log("'1' === 1", '1' === 1);

//------------------------------

var b = "one";
console.log(typeof !b,  "",  !b);

var assigned = 5;
var lazy = true || (assigned = 6);
console.log(assigned, lazy);

console.log(null == undefined);


var x = 2;

x= x* 2;
console.log(typeof x, x);

x = x + 2;
console.log(typeof x, x);

x = x * " 12";
console.log(typeof x, x);

x = x * " 12";
console.log(typeof x, x);

x = "3" - 2;
console.log(typeof x, x);

x = 2 + 2 + 2 + "3";
console.log(typeof x, x);

var qq = undefined;
var ww;
var undefined = 0;

console.log(undefined);

if(typeof z == 'undefined'){
	console.log("somthing");
}