import { createContext, useContext } from 'react'

import { LocalStore } from './store'
import type { TSessionContextValues, TUserStoreData } from './session'

const USER_STORE_KEY = 'codemaster-todo'
const userStore = LocalStore.getData<TUserStoreData>(USER_STORE_KEY)

export const initialState: TSessionContextValues = userStore
  ? {
      status: 'INITIALIZING',
      user: userStore.user,
      currentLocation: userStore.currentLocation,
      locationsData: userStore.locationsData || {},
    }
  : {
      status: 'INITIALIZING',
      user: { id: '', token: '', username: '', claims: [], idHash: '', email: '', idDb: '' },
      currentLocation: { id: '', name: '', displayName: '' },
      locationsData: {},
    }

export const SessionContext = createContext<{
  state: TSessionContextValues
  dispatch: React.Dispatch<TReducerAction>
} | null>(null)

export const useSessionContext = () => {
  const ctx = useContext(SessionContext)
  if (ctx === null) {
    throw new Error('useSessionContext must be used within a SessionProvider')
  }
  return ctx
}
