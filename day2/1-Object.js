"use strict;";

var vehicle = Object.create({make:"",model:"",style:{id:"id"}},{
	make:{
		//writable: false,
		configurable: false,
		enumerable: true,
		//value: "new",
		get: function(){return make.toUpperCase();},
		set: function(value){return make = value;}
	},
	model: {
		//writable: false,
		configurable: false,
		enumerable: true,
		//value: "hatch back",
		get: function(){return model;},
		set: function(value){return model = value;}
	}
});

console.log(vehicle);

vehicle.make="abc";
vehicle.model="xyz";
console.log(vehicle.make);
console.log(vehicle.model);

for(i in vehicle){
	console.log(i,vehicle[i]);
}

Object.freeze(vehicle);
delete vehicle.make
console.log(vehicle.make);



vehicle.category="used";
console.log(vehicle.category);
vehicle.style.name="name";
console.log(vehicle.style.name);

Object.seal(vehicle);
vehicle.style.name="NAME";
console.log(vehicle.style.name);

console.log(make,model);
