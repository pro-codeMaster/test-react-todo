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
