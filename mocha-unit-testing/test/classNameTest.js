// Uncomment if using Node
// var chai = require('chai');
var assert = chai.assert;

// var className = require('../js/className.js');
// var addClass = className.addClass;

describe('addClass', function() {
  it('should add class into element', function() {
    var element = { className: '' };

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });

  it('should not add a class which already exists in element', function() {
    var element = { className: 'exists' };

    addClass(element, 'exists');

    var numClasses = element.className.split(' ').length;
    assert.equal(numClasses, 1);
  });

  it('should append new class after existing one', function() {
    var element = { className: 'exists' };

    addClass(element, 'new-class');

    var classes = element.className.split(' ');
    assert.equal(classes[1], 'new-class');
  });
});
