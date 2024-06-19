import type { TRouteNames, TRoutesOpt } from './types'

export const routes = {
  signIn: {
    uid: '',
    title: 'Sign In',
    path: '/signin',
    component: () => <div>SignIn</div>,
    authenticated: false,
  },
  notFound: {
    uid: '',
    title: 'Not Found',
    path: '/not-found',
    authenticated: false,
  },
}

export const routeKeys = Object.keys(routes as TRoutesOpt) as TRouteNames[]
// sets uid as the name of the route
routeKeys.forEach((k) => (routes[k].uid = k))
