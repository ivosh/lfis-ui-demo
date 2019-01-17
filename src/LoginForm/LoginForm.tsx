import React, { useState } from 'react';
import { defineMessages, FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import './LoginForm.css';
import { ILoginActionProps } from './LoginFormActions';

const messages = defineMessages({
  submit: {
    id: 'form.login.submit',
    description: 'Log in to the application.',
    defaultMessage: 'Login'
  },
  usernameLabel: {
    id: 'form.login.username.label',
    description: 'Name of the "username" label.',
    defaultMessage: 'Username'
  },
  usernamePlaceholder: {
    id: 'form.login.username.placeholder',
    description: 'Placeholder text of the "username" input field.',
    defaultMessage: 'Type: admin'
  },
  passwordLabel: {
    id: 'form.login.password.label',
    description: 'Name of the "password" label.',
    defaultMessage: 'Password'
  },
  passwordPlaceholder: {
    id: 'form.login.password.placeholder',
    description: 'Placeholder text of the "password" input field.',
    defaultMessage: 'Type: 12345'
  },
  loginFailed: {
    id: 'form.login.failed',
    description: 'Login to the LFIS failed.',
    defaultMessage: 'Login failed!'
  },
  errorCode: {
    id: 'form.login.error.code',
    description: 'Error code from LFIS.',
    defaultMessage: 'Error code'
  },
  errorDetail: {
    id: 'form.login.error.detail',
    description: 'Error detail from LFIS',
    defaultMessage: 'Error detail'
  }
});

export interface ILoginForm extends InjectedIntlProps {
  error: {
    show: boolean;
    code: string;
    detail: string;
  };
  onSubmit: (props: ILoginActionProps) => void;
}

const LoginForm = (props: ILoginForm) => {
  const {
    error: { show: showError, code: errorCode, detail: errorDetail },
    onSubmit,
    intl: { formatMessage }
  } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <React.Fragment>
      <form
        className="LoginForm"
        onSubmit={e => {
          e.preventDefault();
          onSubmit({ username, password });
        }}
      >
        <div>
          <FormattedMessage {...messages.usernameLabel} tagName="label" />
          <div>
            <input
              name="username"
              type="text"
              placeholder={formatMessage(messages.usernamePlaceholder)}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div>
          <FormattedMessage {...messages.passwordLabel} tagName="label" />
          <div>
            <input
              name="password"
              type="password"
              placeholder={formatMessage(messages.passwordPlaceholder)}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <FormattedMessage {...messages.submit}>
            {message => <button type="submit"> {message} </button>}
          </FormattedMessage>
        </div>
      </form>
      {showError && (
        <div>
          <div>
            <FormattedMessage {...messages.loginFailed} />
          </div>
          <div>
            <FormattedMessage {...messages.errorCode} />: {errorCode}
          </div>
          <div>
            <FormattedMessage {...messages.errorDetail} />: {errorDetail}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default injectIntl(LoginForm);
