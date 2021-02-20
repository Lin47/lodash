import assert from 'assert';

import isFunction from '../isFunction';

describe('isFunction', function() {
  it('should return `true` for funtions', function() {
    assert.strictEqual(isFunction(new Function()), true)
  })
})