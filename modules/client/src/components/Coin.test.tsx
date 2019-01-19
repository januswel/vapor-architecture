import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Coin from './Coin'

describe('Coin', () => {
  it('renders coin', () => {
    const component = renderer.create(<Coin price={10} actions={{ charge: () => {} }} />)
    expect(component).toMatchSnapshot()
  })
})
