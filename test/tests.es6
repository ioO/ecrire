import {assert,expect} from 'chai';
import {result} from '../index';

describe('result', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, result.indexOf(1));
    });
  });
  describe('#isArray', () => {
    it('should be an array', () => {
      assert.isArray(result);
    });
  });
  describe('#value', () => {
    it('should be equal to [2,3,4]', () => {
      expect(result).to.eql([2,3,4]);
    });
  });
});
