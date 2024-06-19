export interface TUser {
  id: string;
  idHash: string;
  token: string;
  username: string;
  email: string;
  claims: TGooseClaim[];
  idDb: string;
}

export interface TTodoData {
  id: string;
  name: string;
  displayName: string;
}

export type TSessionContextValues = {
  status:
    | "INITIALIZING"
    | "AUTHENTICATED"
    | "DEAUTHENTICATED"
    | "LOGIN"
    | "READY"
    | "LOADING";
  user: TUser | undefined;
  currentData: TTodoData;
  todoData: Record<string, TTodoData>;
};

export type TSessionAction = (
  state: TSessionContextValues,
  payload?: GenericSimpleBag
) => TSessionContextValues | void;
export type TReducerActions = Record<string, TSessionAction>;
