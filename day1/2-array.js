var a = [1,2,3];
a[6] = 4;
console.log(a);

//----------------------------------

var a = new Array(2);
console.log(a);
a.push("1");
a.push(2);
a.push(3);
console.log(a);
console.log(a.pop());
console.log(a);

var a = new Array(40,100);
console.log(a);

var a = new Array(40);
console.log(a);

var a = [1,2,3,4,5,6,7,8];
a.length = 5;
console.log(a);

var a = [];
a["one"] = "one";
a["two"] = "two";
a["three"] = "three";
console.log(a.length, a, a["one"]);

var fruits = ["apple","oranges"];
var fruitBasket =  [2,3];

var fruitBasket1 = fruitBasket.concat(fruits);



fruitBasket.push("kiwi");
console.log(fruits, fruitBasket, fruitBasket1);