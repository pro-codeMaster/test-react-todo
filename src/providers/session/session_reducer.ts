/* eslint-disable no-console */
export const sessionReducer = (state: TSessionContextValues, action: TReducerAction) => {
  const fx = actions[action.type]
  fx?.(state, action.payload)

  /* istanbul ignore next */
  if (process.env.NODE_ENV === 'development') {
    console.group(action.type)
    if (!fx) {
      console.log('%c action not found ', 'background: #FF0000; color: #fff')
    }
    console.log('start', original(state))
    console.log('payload', action.payload)
    console.log('after', current(state))
    console.groupEnd()
  }
}
/* eslint-enable no-console */