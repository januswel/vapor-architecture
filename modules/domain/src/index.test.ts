import * as assert from 'assert'
import sum from './index'

describe('sum', () => {
  it('1 + 2 to equals 3', () => {
    assert(3, sum(1, 2))
  })
})
