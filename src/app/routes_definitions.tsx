import type { TRouteNames, TRoutesOpt } from "./types";
import { SignIn } from "views/signin";

const BASE_PATH = "test-react-todo";
export const routes = {
  signIn: {
    uid: "",
    title: "Sign In",
    path: `${BASE_PATH}/signin`,
    component: SignIn,
    authenticated: false,
  },
  notFound: {
    uid: "",
    title: "Not Found",
    path: "/not-found",
    component: () => <div>Hello World</div>,
    authenticated: false,
  },
};

export const routeKeys = Object.keys(routes as TRoutesOpt) as TRouteNames[];
// sets uid as the name of the route
routeKeys.forEach((k) => (routes[k].uid = k));
