var _ = require('underscore');

var zip = function() {
    // your code here
};

var _output = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
var myOutput = zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);

console.log(_output);
console.log(myOutput);
console.log('these are the same:', _.isEqual(myOutput, _output));
