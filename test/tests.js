'use strict';

var _chai = require('chai');

var _index = require('../index');

describe('result', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      _chai.assert.equal(-1, _index.result.indexOf(1));
    });
  });
  describe('#isArray', function () {
    it('should be an array', function () {
      _chai.assert.isArray(_index.result);
    });
  });
  describe('#value', function () {
    it('should be equal to [2,3,4]', function () {
      (0, _chai.expect)(_index.result).to.eql([2, 3, 4]);
    });
  });
});
