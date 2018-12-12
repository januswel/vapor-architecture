const assert = require('assert')
const sum = require('./index')

describe('sum', () => {
  it('1 + 2 to equals 3', () => {
    assert(3, sum(1, 2))
  })
})
