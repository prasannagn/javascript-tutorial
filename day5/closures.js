function outer(selute){
    var greet = "have a nice day";

    return function(name){
        console.log(selute, name, ",", greet);
    };
}

var sayHello = outer("hello");
sayHello("prasanna");

function increment() {
    var i =0;
    return function (){
        return ++i;
    }
}

var counter = increment();
for(var i =0; i < 5; i++){
    console.log(counter());
}


function sum(i){
    return function(j){
        return i +j;
    }
}

console.log(sum(10)(15));


function addition(a){
     function f(b){
         a += b;
         return f;
     }
    f.toString = function(){return a};
    return f;
}

console.log(addition(10) + "");
console.log(addition(10)(20) + "");
console.log(addition(10)(20)(30) + "");
console.log(addition(10)(20)(30)(40) + "");

function makeArmy(){
    var shooters = [];
    for(var i = 0; i <10; i ++){
        var shooter =  (function(x){
            return function(){
                console.log("shooter id", x);
            }
        })(i);
        shooters.push(shooter);
    }
    return shooters;
}

var army = makeArmy();
var shooter = army[0];
shooter();
shooter = army[5];
shooter();
