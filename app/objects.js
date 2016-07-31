exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
	alterContext: function(fn, obj) {
		return fn.call(obj);
	},

	alterObjects: function(constructor, greeting) {
		constructor.prototype.greeting = greeting;

	},

	iterate: function(obj) {
		let g = [];
		for(let o in obj){
			if (obj.hasOwnProperty(o)) {
				g.push(o + ": " + obj[o]);
			}
		}
		return g;
	}
};
