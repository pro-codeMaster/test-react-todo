import { ComponentType } from 'react'
import { routes } from './routes_definitions'

export type RoutesPathsType = TGenRouteData<typeof routes, string>

export type TRouteNames = keyof typeof routes
export type TGenRouteData<T, K> = {
  [Property in keyof T]: K
}
export type TRoutesOpt = TGenRouteData<typeof routes, TRouteConfig>

export interface TRouteConfig {
  uid: TRouteNames
  title?: string
  path?: string
  component?: ComponentType
  authenticated: boolean
  target?: '_blank'
}
