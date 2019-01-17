import { Action, ActionCreator, Dispatch } from 'redux';
import { ILoginAPIResult, loginAPI } from '../api/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';

export interface ILoginActionProps {
  username: string;
  password: string;
}

interface ILoginRequestAction {
  type: typeof LOGIN_REQUEST;
  username: string;
  password: string;
}
const loginRequest: ActionCreator<Action> = ({
  username,
  password
}: ILoginActionProps): ILoginRequestAction => ({
  type: LOGIN_REQUEST,
  username,
  password
});

export interface ILoginResponseAction {
  type: typeof LOGIN_RESPONSE;
  data: ILoginAPIResult;
}
const loginResponse: ActionCreator<Action> = (data): ILoginResponseAction => ({
  type: LOGIN_RESPONSE,
  data
});

export const loginAction = ({ username, password }: ILoginActionProps) => async (
  dispatch: Dispatch
) => {
  await dispatch(loginRequest({ username, password }));
  const data = await loginAPI({ username, password });
  await dispatch(loginResponse(data));
};
