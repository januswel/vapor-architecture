import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Coin } from '@januswel/domain'

import { charge } from '../modules/vending-machine'
import { sellAndCount } from '../usecases/vending-machine'
import Screen from '../components/Screen'
import getInventory from '../selectors/get-inventory'
import isWating from '../selectors/is-waiting'
import { AppState } from '../store'

const mapStateToProps = (state: AppState) => ({
  chargedMoney: state.vendingMachine.chargedMoney,
  inventory: getInventory(state),
  isCommunicating: isWating(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
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
