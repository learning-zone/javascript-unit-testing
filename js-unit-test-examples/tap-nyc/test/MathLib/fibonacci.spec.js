var tap = require('tap');
var MathLib = require('../../src/index.js');

var mathLib = new MathLib();
var result = mathLib.fibonacci(12);
tap.equal(result[12], 144);
