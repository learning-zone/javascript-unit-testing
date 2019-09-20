/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import { expect } from 'chai';
import { MathLib } from '../src';

describe('MathLib', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      const mathLib = new MathLib();
      const result = mathLib.add(1, 2);
      expect(result).to.equal(3);
    });
  });

  describe('multiply', () => {
    it('multiply two numbers', () =>{
      const mathLib = new MathLib();
      const result = mathLib.multiply(3, 3);
      expect(result).to.equal(9);
    });
  });

  describe('fibonacci', () =>{
    it('generates a valid fibonacci sequence', () =>{
      const mathLib = new MathLib();
      const result = mathLib.fibonacci(12);
      expect(result[12]).to.equal(144);
    });
  });
});
