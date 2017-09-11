var students = ["std1", "std2", "std3"];

function welcome() {
    var args = Array.prototype.slice.call(arguments);

    //var slice = Array.prototype.slice;
    //slice.call([1,2,3],0,1);

    var lastItem = args.pop();
    console.log("welcome", lastItem);
}
welcome.apply(null, students);

function exersise(){
    var reverse = Array.prototype.reverse;
    console.log("Reverse:..",reverse.call(students));

    var reverse2 = Function.prototype.call.bind(Array.prototype.reverse);
    console.log("Reverse:..",reverse2(students));
}
exersise();