import { combineReducers } from 'redux';
import { ILoginResponseAction, LOGIN_RESPONSE } from '../LoginForm/LoginFormActions';
import { IErrorState, ITokenType } from './state';

type IAppAction = ILoginResponseAction;

const initialErrorState: IErrorState = { code: undefined, detail: undefined };

const errorReducer = (state = initialErrorState, action: IAppAction) => {
  const { type, data } = action;
  switch (type) {
    case LOGIN_RESPONSE:
      return {
        code: data.success ? undefined : data.error!.code,
        detail: data.success ? undefined : data.error!.detail
      };
    default:
      return state;
  }
};

const initialTokenState: ITokenType = null;

const tokenReducer = (state = initialTokenState, action: IAppAction) => {
  const { type, data } = action;
  switch (type) {
    case LOGIN_RESPONSE:
      return data.success ? data.token : null;
    default:
      return state;
  }
};

const reducers = {
  error: errorReducer,
  token: tokenReducer
};

export default combineReducers(reducers);
