import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Coin } from '@januswel/domain'
import { AnyAction } from 'redux'

import { clearError } from '../modules/error'
import { charge } from '../modules/vending-machine'
import { sellAndCount } from '../usecases/vending-machine'
import Screen from '../components/Screen'
import getItems from '../selectors/get-items'
import isWating from '../selectors/is-waiting'
import { AppState } from '../modules'

export const mapStateToProps = (state: AppState) => ({
  error: state.error.error,
  chargedMoney: state.vendingMachine.chargedMoney,
  items: getItems(state),
  isCommunicating: isWating(state),
})

export const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, AnyAction>) => ({
  actions: {
    clearError: () => {
      dispatch(clearError())
    },
    charge: (chargedMoney: Coin.Entity) => {
      dispatch(charge(chargedMoney))
    },
    sellAndCount: (itemId: number) => {
      dispatch(sellAndCount(itemId))
    },
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen)
