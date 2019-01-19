import * as React from 'react'
import * as renderer from 'react-test-renderer'

import NetworkIndicator from './NetworkIndicator'

describe('NetworkIndicator', () => {
  it('renders indicator', () => {
    const component = renderer.create(<NetworkIndicator />)
    expect(component).toMatchSnapshot()
  })
})
