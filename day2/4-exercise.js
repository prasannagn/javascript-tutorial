var exercise = {
	line : "the word exercise repeated exercise       exercise exercise exercise twise exercise twise the",

	getSpaceRemovedLine : function(){
		return this.line.replace(/ /g, "");
	},

	getWordCount : function(){
		var wordCount = {};
		this.getWords().forEach(function(current){
			wordCount[current] ? wordCount[current]++ : wordCount[current] = 1;
		});
		return wordCount;
	},
	
	getWords : function(){
		return this.line.split(/\s* \s*/);
	}
};

console.log( exercise.getSpaceRemovedLine());
console.log( exercise.getWords());
console.log( exercise.getWordCount());