import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Coin } from '@januswel/domain'
import { AnyAction } from 'redux'

import { charge } from '../modules/vending-machine'
import { sellAndCount } from '../usecases/vending-machine'
import Screen from '../components/Screen'
import getInventory from '../selectors/get-inventory'
import isWating from '../selectors/is-waiting'
import { AppState } from '../modules'

const mapStateToProps = (state: AppState) => ({
  chargedMoney: state.vendingMachine.chargedMoney,
  inventory: getInventory(state),
  isCommunicating: isWating(state),
})

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, AnyAction>) => ({
  actions: {
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
