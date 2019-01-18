import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Charger from './Charger'

describe('Charger', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Charger chargedMoney={500} actions={{ charge: () => {} }} />)
    expect(component).toMatchSnapshot()
  })
})
