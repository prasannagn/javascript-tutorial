var namespace = {
    com: {
        cobalt: {

        }
    }
};

function createModule(namespace, func){

    var namespaces = namespace.split(".");
    var last = namespaces.pop();
    var module = this;
    namespaces.forEach(function(item){
        module [item] = {};
        module = module[item];
    });
    module[last] = func;
}

createModule("a.b.c.d", function(){console.log("done")});

a.b.c.d();

(function(){
    function rec(namespace, func, parent){
        var length = namespace.length;
        if(length == 1){
            parent[namespace[0]]= func;
            return;
        }

        var obj = namespace[0];
        namespace = namespace.slice(1, (length));
        parent[obj] = {};

        rec(namespace, func, parent[obj]);
    }


    rec(["x","y","z"], function(){console.log("done...")}, this);


})();
x.y.z();