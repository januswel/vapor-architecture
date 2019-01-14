import * as React from 'react'
import { TouchableOpacity } from 'react-native'

import ButtonLabel, { Props as ButtonLabelProps } from './ButtonLabel'

export interface Props extends ButtonLabelProps {
  index: number
  actions: {
    sellAndCount: (id: number) => void
  }
}
export default (props: Props) => {
  return props.isSoldOut || props.isTooFewChargedMoney ? (
    <ButtonLabel {...props} />
  ) : (
    <TouchableOpacity
      onPress={() => {
        props.actions.sellAndCount(props.index)
      }}
    >
      <ButtonLabel {...props} />
    </TouchableOpacity>
  )
}
