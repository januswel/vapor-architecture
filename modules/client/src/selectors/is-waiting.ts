import { createSelector } from 'reselect'

import { AppState } from '../store'

const getNumofWatings = (state: AppState) => state.network.numofWaitings

export default createSelector(
  [getNumofWatings],
  numofWaitings => 0 < numofWaitings,
)
