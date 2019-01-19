import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Display from './Display'

describe('Display', () => {
  it('renders display which have no items', () => {
    const component = renderer.create(
      <Display
        items={[]}
        chargedMoney={0}
        actions={{
          sellAndCount: () => {},
        }}
      />,
    )
    expect(component).toMatchSnapshot()
  })

  it('renders display which have some items', () => {
    const component = renderer.create(
      <Display
        items={[
          {
            id: 0,
            price: 120,
            imageUrl: 'https://example.com/assets/images/coffee.png',
            isSoldOut: false,
            isTooFewChargedMoney: true,
            actions: {
              sellAndCount: () => {},
            },
          },
          {
            id: 1,
            price: 100,
            imageUrl: 'https://example.com/assets/images/water.png',
            isSoldOut: true,
            isTooFewChargedMoney: true,
            actions: {
              sellAndCount: () => {},
            },
          },
        ]}
        chargedMoney={0}
        actions={{
          sellAndCount: () => {},
        }}
      />,
    )
    expect(component).toMatchSnapshot()
  })
})
