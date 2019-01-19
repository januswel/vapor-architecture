import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Screen from './Screen'

describe('Screen', () => {
  it('renders screen', () => {
    const component = renderer.create(
      <Screen
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
        actions={{ charge: () => {}, sellAndCount: () => {} }}
      />,
    )
    expect(component).toMatchSnapshot()
  })
})
