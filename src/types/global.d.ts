export {}

declare global {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type GenericSimpleBag = Record<string, any>

  export interface TReducerAction {
    type: string
    payload?: GenericSimpleBag
  }

}
