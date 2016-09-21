import assert from 'assert';
import result from '../index';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  describe('#isArray', function() {
    it('should be [2,3,4] array', function() {
      assert.equal([2,3,4], result);
    });
  });
});
