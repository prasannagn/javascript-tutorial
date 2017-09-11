var Button = function(content){
    this.content = content;
};

Button.prototype.click = function(){
    console.log(this.content, " clicked");
};

var myButton = new Button("OK");
myButton.click();

var looseClick = myButton.click;
looseClick();

var boundClick = myButton.click.bind(myButton);
boundClick();

//------------------- early bind ---------------------//

function menu(){
    var privateFun = function(){
        console.log("early..",this);
    }.bind(this);
    this.fun = privateFun;
    //privateFun();
}

var menu = new menu();

function test(callback){
    callback();
}

test(menu.fun);


//------------------- late bind ---------------------//

function menulate(){
    var privateFun = function(){
        console.log("late:..",this);
    };
    this.fun = privateFun;
    //privateFun();
}

var menulate = new menulate();

function test(callback){
    callback();
}

test(menulate.fun.bind(menulate));

//-------------- curring ---------------------//
function sum(a , b){
    return a+b;
}

var add5 = sum.bind(null, 5);
console.log(add5(10));
console.log(sum(10,20));

//--------------------

var str = ["x", "b", "a"];
//console.log(str.slice(0,1));
function welcome(){
    var args = Array.prototype.slice.call(arguments);
    console.log(arguments);

    console.log(args);
    console.log(args.pop());
}

welcome(str);

welcome.apply(null,str);