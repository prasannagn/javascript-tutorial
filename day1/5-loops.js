var a = ['a','b','c','d','x'];
a["xxxx"] = 'z';
a.prop="cccc";
var result = '\n';
for(var i in a){
	result += 'index: ' + i + ', value: ' + a[i] + '\n';
}

console.log(result);


var animals = ["dog","cat","hen"];
animals.forEach(function(currentValue, index, array){
	console.log(currentValue, index, array);
});

var a = [1,2,3];
var b = [4,5,6];

for(var i in a){
	b.push(a[i]);
}
console.log(b);

var a = [1,2,3];
var b = [4,5,6];

a.forEach(function(current, index){
	b.push(current);
})
console.log(b);

var a = [1,22,3];
var b = [41,22,16];

var c = b.concat(a);
c.sort(function(x,y){
	if(x == y){
		return 0;
	}else if(x> y){
		return 1;
	}else if(x< y){
		return -1;
	}
});
console.log(c);

