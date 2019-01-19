import * as React from 'react'
import { TouchableOpacity } from 'react-native'

import ButtonLabel, { Props as ButtonLabelProps } from './ButtonLabel'

export interface Actions {
  sellAndCount: (id: number) => void
}
export interface Props extends ButtonLabelProps {
  id: number
  actions: Actions
}
export default (props: Props) => {
  return props.isSoldOut || props.isTooFewChargedMoney ? (
    <ButtonLabel {...props} />
  ) : (
    <TouchableOpacity
      onPress={() => {
        props.actions.sellAndCount(props.id)
      }}
    >
      <ButtonLabel {...props} />
    </TouchableOpacity>
  )
}
