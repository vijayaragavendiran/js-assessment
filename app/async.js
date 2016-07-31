exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function(value) {
		return new Promise((function(resolve,reject) {
			switch(value){
				case true:
				resolve(true);
				case 'success':
				resolve('success');
			}
		}))

		
	},

	manipulateRemoteData: function(url) { 
// Return a new promise.
return new Promise(function(resolve, reject) {
	setTimeout(function() {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        let sortArray = _.sortBy(JSON.parse(req.response).people, 'name');
        let result = _.pluck(sortArray, 'name');
        resolve(result);
    }
    
else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
},100);
});

}
};
