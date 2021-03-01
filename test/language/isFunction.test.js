import assert from 'assert';

import isFunction from '../../language/isFunction';

describe('isFunction', function() {
  it('should return `true` for funtions', function() {
    assert.strictEqual(isFunction(new Function()), true)
  })

  it('should return `false` for non-functions', function() {
    assert.strictEqual(isFunction([1, 2, 3]), false)
    assert.strictEqual(isFunction(true), false)
    assert.strictEqual(isFunction(new Date), false)
    assert.strictEqual(isFunction(new Error), false)
    assert.strictEqual(isFunction({ 'a': 1 }), false)
    assert.strictEqual(isFunction(1), false)
    assert.strictEqual(isFunction(/x/), false)
    assert.strictEqual(isFunction('a'), false)
  })
})