import reducer, { SEND_REQUEST, RECEIVE_RESPONSE, sendRequest, receiveResponse } from './network'

describe('network', () => {
  describe('sendRequest', () => {
    it('returns Action to tell "send request"', () => {
      expect(sendRequest()).toEqual({
        type: SEND_REQUEST,
      })
    })
  })

  describe('receiveResponse', () => {
    it('returns Action to tell "receive response"', () => {
      expect(receiveResponse()).toEqual({
        type: RECEIVE_RESPONSE,
      })
    })
  })

  describe('reducer', () => {
    it('reduces Actions for sending request', () => {
      const state = {
        numofWaitings: 0,
      }
      expect(reducer(state, sendRequest())).toEqual({
        numofWaitings: 1,
      })
    })
    it('reduces Actions for receiving response', () => {
      const state = {
        numofWaitings: 1,
      }
      expect(reducer(state, receiveResponse())).toEqual({
        numofWaitings: 0,
      })
    })
  })
})
