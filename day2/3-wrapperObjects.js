//"use strict";
var str = "srting me";
str.eat = "ate";
console.log(typeof str, str.eat);

var str = "string me";
str = str.toUpperCase();
console.log(typeof str, str);

var str = new String("srting me");
str.toUpperCase();
str.eat = "ate";
console.log(typeof str, str.eat, str.toString());

var str =  String("srting me");
console.log(typeof str, str);

//------numbers-----
var x = 1;
var y = new Number(1);
console.log(typeof x);
console.log(typeof y);
console.log(x == y);
console.log(x === y);

//--------------------------------
var x = {
	num:2,
	valueOf:function(){
		return this.num * 2;
	}
};

var y = {
	num:3,
	valueOf:function(){
		return this.num * 2;
	}
};
console.log(x + y);

//---------------------Boolean----------------
var myFalse = new Boolean(false);
var g = new Boolean(myFalse);
console.log(g.valueOf());

console.log(Boolean(undefined));
