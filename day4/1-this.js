function f1(){
	var a = 1;
	f2();
}

function f2(){
	//return console.log(this);
}

f1();

(function(){
	//"use strict"
	//console.log(this);
})();


var x = (function(){
	"use strict"
	return function(){
		//console.log(this);
	}
})();
x();

var foo = {
	baz:function(){
		//console.log("this:...",this);
	}
};
foo.baz();
anotherBaz = foo.baz;
anotherBaz();


var o = {
	prop:37,
	f:function(){
		return this.prop;
	}
};
console.log(o.f());
var anotherF = o.f;
console.log(anotherF());

var o ={
	prop:37
};
function independent(){
	return this.prop;
}
o.f = independent;
console.log(o.f());

var o = {
	prop : 37
};
function independent(){
	return this.prop;
}
o.b = {
	g:independent,
	prop:47
};
console.log(o.b.g());

var anum =0;
var foo = {
	anum:10,
	baz:{
		anum:20,
		bar:function(){
			console.log(this.anum);
		}
	}
};
foo.baz.bar();
foo.hello = foo.baz.bar;
foo.hello();

function C(){
	this.name = "construction"
}
var a = new C();
console.log(a.name);
a.name = "100";
var b = new C();
console.log(b.name);

var name = "global";
function outer(){
	this.name = "outer name";

	return function(){
		return this.name;
	};
}

var o = new outer();
console.log(o());

var name = "global";
var me = {
	name : "me-local",
	you : {
		mine:this.name
	}
};
console.log(me.you.mine);


jquery().click(function(){
	console.log(this);
});

function jquery(){
	return {
		random:0,
		click:function(callback){
			callback();
		}
	}
}

var user = {
	tournament : "The Masters"
	, data : [
		{name:"T. woods", age:37}
		,{name:"P. Mickelson", age:43}
	]
	,clickHandler: function(){
		var that = this;
		this.data.forEach(function(person){
			console.log("This:.." + that);
			console.log("tournament:..", that.tournament);
		});
	}
};
user.clickHandler();
