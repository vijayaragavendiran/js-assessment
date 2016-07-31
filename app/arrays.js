exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((sum, x) => sum + x);
  },

  remove: function(arr, item) {
    return _.without(arr, item);
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    return _.without(arr,arr.pop());
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return [...arr1,...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;

  },

  count: function(arr, item) {

    var x = (function(item) {
      let _this = this;

      function group() {
        return x = _.countBy(_this, function(n) {
          return n;
        });
      }
      return {
        getCount: function() {

          return(group()[item]);

        }
      }
    })
    let items = x.call(arr,item);;
    return items.getCount();

  },

  duplicates: function(arr) {
    let x = _.groupBy(arr, (i) => {
      return i;
    });
    var duplicates = [];
    _.each(x, (group) => {
      if (group.length > 1) {
        duplicates.push.apply(duplicates, group);
      }
    })
    let values = _.uniq(duplicates, (item) => {
      return item
    })
    return values;

  },

  square: function(arr) {
    let sq = [];
    _.each(arr, function(i) {
      sq.push(Math.pow(i, 2));
    })
    return sq;

  },

  findAllOccurrences: function(arr, target) {
    let occurences = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        occurences.push(i);
      }
    }
    return occurences;
  }
};
