var tap = require('tap');
var MathLib = require('../../src/index.js');

var mathLib = new MathLib();
var result = mathLib.add(1, 2);
tap.equal(result, 3);
