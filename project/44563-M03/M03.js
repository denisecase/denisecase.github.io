//  This file has our application code. 
//  Complete this code so all QUnit tests pass. 
//  We have defined an App object that performs math functions.
//  A JS object is a set of key-value pairs, more like a dictionary in other languages.
var App = {
  max: function () {
    var max = -Infinity;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  },
  isOdd: function (number) {
    if (typeof number !== 'number') {
      throw Error('The given argument is not a number');
    }
    return number % 2 !== 0;
  },
  sortObj: function (array) {
    array.sort(function (a, b) {
      var date1 = new Date(a.timestamp).getTime();
      var date2 = new Date(b.timestamp).getTime();

      if (date1 < date2) {
        return -1;
      } else if (date1 === date2) {
        return 0;
      } else {
        return 1;
      }
    });
  },
  pow: function (base, power) {
    var output = 1;
    for (var i = 0; i < power; i++) {
      output *= base;
    }
    return output;
  },
  sum: function () {
    var output = 0;
    for (var i = 0; i < arguments.length; i++) {
      output += arguments[i];
    }
    return output;
  }
};

