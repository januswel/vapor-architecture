import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Screen from './Screen'

describe('Screen', () => {
  it('renders screen', () => {
    const component = renderer.create(
      <Screen
        error={null}
        items={[
          {
            id: 0,
            price: 430,
            imageUrl: 'https://example.com/assets/images/coffee.png',
            isSoldOut: false,
            isTooFewChargedMoney: false,
            actions: {
              sellAndCount: () => {},
            },
          },
        ]}
        chargedMoney={300}
        isCommunicating
        actions={{
          clearError: () => {},
          charge: () => {},
          sellAndCount: () => {},
        }}
      />,
    )
    expect(component).toMatchSnapshot()
  })

  it('renders screen with error', () => {
    const component = renderer.create(
      <Screen
        error={new Error('test')}
        items={[
          {
            id: 0,
            price: 430,
            imageUrl: 'https://example.com/assets/images/coffee.png',
            isSoldOut: false,
            isTooFewChargedMoney: false,
            actions: {
              sellAndCount: () => {},
            },
          },
        ]}
        chargedMoney={300}
        isCommunicating
        actions={{
          clearError: () => {},
          charge: () => {},
          sellAndCount: () => {},
        }}
      />,
    )
    expect(component).toMatchSnapshot()
  })
})
