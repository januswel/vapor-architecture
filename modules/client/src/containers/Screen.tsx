import { connect } from 'react-redux'

import { charge, buy } from '../modules/vending-machine'
import Screen from '../components/Screen'

const mapStateToProps = state => ({
  vendingMachine: state,
})

const mapDispatchToProps = dispatch => ({
  actions: {
    charge: chargedMoney => {
      dispatch(charge(chargedMoney))
    },
    buy: selectedIndex => {
      dispatch(buy(selectedIndex))
    },
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen)
