'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      _assert2.default.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
  describe('#isArray', function () {
    it('should be [2,3,4] array', function () {
      _assert2.default.equal([2, 3, 4], _index2.default);
    });
  });
});
