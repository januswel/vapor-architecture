import { Action } from 'redux'

export type DefineAction<T extends string, Payload> = Action<T> &
  (Payload extends never
    ? {}
    : {
        readonly payload: { readonly [K in keyof Payload]: Payload[K] }
      })

export type DefineState<InitialState extends {}> = { readonly [K in keyof InitialState]: InitialState[K] }
