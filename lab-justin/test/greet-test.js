'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('greet', () => {
  it('should return Hello, Justin', () => {
    let result = greet('Justin');
    expect(result).toEqual('Hello, Justin');
  });
  it('should return null', () => {
    let result = greet(7);
    expect(result).toEqual(null);
  });
});
