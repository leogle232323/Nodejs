//module.exports
function Good(){
	var name;
	this.setName = function(thyName){
		name = thyName;
	};
	this.sayGood = function(){
			console.log('Good' + name);
	};
}
module.exports = Good;