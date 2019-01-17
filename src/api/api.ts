import { IErrorState } from '../store/state';

const baseURL = 'http://localhost:3000/';

const hasError = (response: Response) =>
  response.status !== 200 ||
  (response.headers.get('returncode') &&
    response.headers.get('returncode')!.toLowerCase() !== 'success');

const getError = (response: Response) => ({
  code: response.headers.get('returncode') || '?',
  detail: response.headers.get('detailederrorcode') || '?'
});

export interface ILoginAPIProps {
  username: string;
  password: string;
}

export interface ILoginAPIResult {
  success: boolean;
  error?: IErrorState;
  token?: string;
}

export const loginAPI = async (props: ILoginAPIProps): Promise<ILoginAPIResult> => {
  const { username, password } = props;
  const urlParams = new URLSearchParams(Object.entries({ userName: username }));
  const loginURL = `${baseURL}/authenticationsrv/user/token?${urlParams}`;
  const response = await fetch(loginURL, { headers: { password } });
  if (hasError(response)) {
    return { success: false, error: getError(response) };
  }
  return { success: true, token: response.headers.get('usertoken') || '?' };
};
