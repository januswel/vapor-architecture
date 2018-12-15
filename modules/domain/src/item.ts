import * as Drink from './drink'

type Id = string
type Price = number
type Remains = number

export interface Entity {
  id: Id;
  drink: Drink.Entity;
  price: Price;
  remains: Remains;
}

export const factory = (drinkId: Drink.Id, price: Price, remains: Remains): Entity => ({
  id: `${drinkId}-${price}`,
  drink: Drink.factory(drinkId),
  price: price,
  remains: remains,
})
