import { Action } from 'redux'

type Handlers<State, Types extends string, Actions extends Action<Types>> = {
  readonly [Type in Types]: (state: State, action: Actions) => State
}
export const createReducer = <State, Types extends string, Actions extends Action<Types>>(
  initialState: State,
  handlers: Handlers<State, Types, Actions>,
) => (state = initialState, action: Actions) =>
  handlers.hasOwnProperty(action.type) ? handlers[action.type as Types](state, action) : state
