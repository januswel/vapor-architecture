import * as request from 'supertest'

import app from './app'

describe('app', () => {
  it('responds according to GET /', () => {
    return request(app)
      .get('/')
      .expect(200)
  })
})
