
'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log(greet('Justin'));

console.log('arithmetic.addition(1,2)', arithmetic.addition('hello',2));
console.log('arithmetic.subtraction(1,2)', arithmetic.subtraction(1,2));
