//1. function declaration
function fun(){
	console.log("function declaration");
};
fun();
//2. function expression
var func = function(){
	console.log("function expression");
};
func();
//3. named function expression
var func  = function fun(){
	console.log("named function expression");
	console.log(typeof fun);
};
func();

//4. iife
(function(){
	console.log("iife");
})();

//4.1 grouping expression
!function(){
	console.log("grouping expression");
}();
//4.2
(function(){console.log("4.2");}());
//4.3
var o = {
	bar:function(){
		console.log("barz");
	}()
}
o.bar;

//5. function constructor
var func = new Function('arg1', 'arg2', 'console.log(arg1,arg2)');
func('a','b');

//6. function constructor witout new
var func =  Function('arg1', 'arg2', 'console.log(arg1,arg2)');
func('a','b');

//7. object constructor
var func = new function(){
	console.log("object constructor");
};
