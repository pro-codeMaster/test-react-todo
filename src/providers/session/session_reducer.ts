import type { TSessionContextValues, TReducerActions } from './session'

const actions: TReducerActions = {
  // Message sent when the app finished initializing and is ready
  READY: (state: TSessionContextValues, _?: GenericSimpleBag) => {
    state.status = 'READY'
  },
}

/* eslint-disable no-console */
export const sessionReducer = (state: TSessionContextValues, action: TReducerAction) => {
  const fx = actions[action.type]
  fx?.(state, action.payload)
}
/* eslint-enable no-console */