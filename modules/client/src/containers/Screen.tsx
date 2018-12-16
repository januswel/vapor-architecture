import { connect } from 'react-redux'

import { charge, buyAndCount } from '../modules/vending-machine'
import Screen from '../components/Screen'
import inventorySelector from './selectors/get-inventory'

const mapStateToProps = state => ({
  chargedMoney: state.chargedMoney,
  inventory: inventorySelector(state),
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
