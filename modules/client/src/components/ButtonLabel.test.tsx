import * as React from 'react'
import * as renderer from 'react-test-renderer'

import ButtonLabel from './ButtonLabel'

describe('', () => {
  it('renders button label for items sold out', () => {
    expect(
      renderer.create(
        <ButtonLabel
          price={120}
          imageUrl="http://example.com/assets/images/coffee.png"
          isSoldOut
          isTooFewChargedMoney
        />,
      ),
    ).toMatchSnapshot()

    expect(
      renderer.create(
        <ButtonLabel
          price={120}
          imageUrl="http://example.com/assets/images/coffee.png"
          isSoldOut
          isTooFewChargedMoney={false}
        />,
      ),
    ).toMatchSnapshot()
  })

  it('renders button label when charged money is too few to buy', () => {
    expect(
      renderer.create(
        <ButtonLabel
          price={120}
          imageUrl="http://example.com/assets/images/coffee.png"
          isSoldOut={false}
          isTooFewChargedMoney
        />,
      ),
    ).toMatchSnapshot()
  })

  it('renders button label for items which is available to buy', () => {
    expect(
      renderer.create(
        <ButtonLabel
          price={120}
          imageUrl="http://example.com/assets/images/coffee.png"
          isSoldOut={false}
          isTooFewChargedMoney={false}
        />,
      ),
    ).toMatchSnapshot()
  })
})
