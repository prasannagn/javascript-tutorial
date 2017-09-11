var books = ["1", "2"];
var width = new Object();
var myBox = { height: 6
			, contents:books
			, width:2
			, length:5
		    };
//console.log(myBox.height, myBox.contents, myBox.width);
books[2] = "3";
//console.log(myBox.height, myBox.contents);


var person = {
	  name : "prasanna"
	, age : "30"
	, sex : "male"
	, address:{
		  street:"21"
		, city:"bengaluru"
		, toString: function(){
			return "0";
		}
	}
};

for(var key in person){
	if(typeof person[key] == "object" ){
		for(var k in person[key]){
			if( typeof person[key][k] != "function"){
				console.log(key , "." , k , ":" , person[key][k]);
			}
		}
	}else{
		console.log(key , ":", person[key]);
	}
	
};

