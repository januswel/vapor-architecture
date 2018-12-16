import { createSelector } from 'reselect'

const getCommunicationState = state => 0 < state

export default createSelector(
  [getCommunicationState],
  isCommunicating => isCommunicating,
)
