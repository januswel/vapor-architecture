import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Item from './Item'

describe('Item', () => {
  it('renders tappable item for available item', () => {
    expect(
      renderer.create(
        <Item
          id={0}
          price={120}
          imageUrl="https://example.com/assets/images/coffee.png"
          isSoldOut={false}
          isTooFewChargedMoney={false}
          actions={{
            sellAndCount: () => {},
          }}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('renders untappable item for unavailable item', () => {
    expect(
      renderer.create(
        <Item
          id={0}
          price={120}
          imageUrl="https://example.com/assets/images/coffee.png"
          isSoldOut
          isTooFewChargedMoney
          actions={{
            sellAndCount: () => {},
          }}
        />,
      ),
    ).toMatchSnapshot()

    expect(
      renderer.create(
        <Item
          id={0}
          price={120}
          imageUrl="https://example.com/assets/images/coffee.png"
          isSoldOut
          isTooFewChargedMoney={false}
          actions={{
            sellAndCount: () => {},
          }}
        />,
      ),
    ).toMatchSnapshot()

    expect(
      renderer.create(
        <Item
          id={0}
          price={120}
          imageUrl="https://example.com/assets/images/coffee.png"
          isSoldOut={false}
          isTooFewChargedMoney
          actions={{
            sellAndCount: () => {},
          }}
        />,
      ),
    ).toMatchSnapshot()
  })
})
