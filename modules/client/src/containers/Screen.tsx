import { connect } from 'react-redux'

import { charge } from '../modules/vending-machine'
import { sellAndCount } from '../usecases/vending-machine'
import Screen from '../components/Screen'
import inventorySelector from '../selectors/get-inventory'
import communicationStateSelector from '../selectors/get-communication-state'

const mapStateToProps = state => ({
  chargedMoney: state.vendingMachine.chargedMoney,
  inventory: inventorySelector(state),
  isCommunicating: communicationStateSelector(state),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    charge: chargedMoney => {
      dispatch(charge(chargedMoney))
    },
    sellAndCount: itemId => {
      dispatch(sellAndCount(itemId))
    },
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen)
