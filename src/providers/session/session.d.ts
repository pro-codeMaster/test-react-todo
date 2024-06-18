export interface TUser {
  id: string
  idHash: string
  token: string
  username: string
  email: string
  claims: TGooseClaim[]
  idDb: string
}

export interface TTodoData {
  name: string
  displayName: string
  timezone: string
  isDelegate: boolean | null
  delegateLocationId: string | null
  locationVaccines: TLocationVaccines
  locationContracts: string[]
  lastFetched: number
}

export type TSessionContextValues = {
  status: 'INITIALIZING' | 'AUTHENTICATED' | 'DEAUTHENTICATED' | 'LOGIN' | 'READY' | 'LOADING'
  user: TUser | undefined
  todoData: Record<string, TTodoData>
}

export type TSessionAction = (state: TSessionContextValues, payload?: GenericSimpleBag) => TSessionContextValues | void
export type TReducerActions = Record<string, TSessionAction>