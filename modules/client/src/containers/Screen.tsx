import { connect } from 'react-redux'

import { charge } from '../modules/vending-machine'
import { buyAndCount } from '../modules/buy-and-count'
import Screen from '../components/Screen'
import inventorySelector from './selectors/get-inventory'
import communicationStateSelector from './selectors/get-communication-state'

const mapStateToProps = state => ({
  chargedMoney: state.vendingMachine.chargedMoney,
  inventory: inventorySelector(state.vendingMachine),
  isCommunicating: communicationStateSelector(state.network),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    charge: chargedMoney => {
      dispatch(charge(chargedMoney))
    },
    buyAndCount: itemId => {
      dispatch(buyAndCount(itemId))
    },
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen)
