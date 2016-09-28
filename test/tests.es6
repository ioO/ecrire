import {assert,expect} from 'chai';
import {result} from '../index';

describe('result', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, result.indexOf(1));
    });
  });
  describe('#isArray', function() {
    it('should be an array', function() {
      assert.isArray(result);
    });
  });
  describe('#value', function() {
    it('should be equal to [2,3,4]', function() {
      expect(result).to.eql([2,3,4]);
    });
  });
});
