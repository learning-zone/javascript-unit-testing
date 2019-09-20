var tap = require('tap');
var MathLib = require('../../src/index.js');

var mathLib = new MathLib();
var result = mathLib.multiply(3, 3);
tap.equal(result, 9);
