export type ITokenType = string | null;

export interface IErrorState {
  readonly code?: string;
  readonly detail?: string;
}

export interface IState {
  readonly error: IErrorState;
  readonly token: ITokenType;
}
