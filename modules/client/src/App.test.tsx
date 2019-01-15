import * as React from 'react'
import * as renderer from 'react-test-renderer'

import App from './App'

describe('App', () => {
  it('renders correctly', () => {
    const component = renderer.create(<App />)
    expect(component).toMatchSnapshot()
  })
})
