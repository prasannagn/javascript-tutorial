(function(person){
	person = person || function(){
		var age;
		var name;

		var init = function(){
			age = 10;
			name = "Prasanna";
		};
		var display = function(){
			console.log("name:", name, "age:", age);
		};
		var getAge = function(){
			return age;
		};
		var setAge = function(a){
			age = a;
		};
		var getName = function(){
			return name;
		};
		var setName = function(n){
			name = n;
		};

		init();

		return {
			display: display,
			getAge: getAge,
			setAge: setAge,
			getName: getName,
			setName: setName
		};
	}();

	console.log(person.getName(), person.getAge());
	person.setName("Prasanna GN");
	person.setAge(30);
	person.display();

})();






