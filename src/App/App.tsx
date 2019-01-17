import React, { useState } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

import LoginFormContainer from '../LoginForm/LoginFormContainer';
import './App.css';
import logo from './logo.svg';

const messages = defineMessages({
  greeting: {
    id: 'app.home.greeting',
    description: 'Message to greet users.',
    defaultMessage: 'Welcome to {name} proof of concept!'
  },
  intro: {
    id: 'app.home.intro',
    description: 'Instructions how to get started.',
    defaultMessage:
      'Choose whether to start filling out a fresh new form or load values from a previously saved one.'
  }
});

enum Showing {
  Login,
  Search
}

const App = () => {
  const [showing] = useState(Showing.Login);

  return (
    <div className="App">
      <header className="App__header">
        <div className="App__languages">
          <a href="/?locale=cs">česky</a>
          <a href="/?locale=en">English</a>
        </div>
        <img src={logo} className="App__logo" alt="logo" />
        <FormattedMessage {...messages.greeting} values={{ name: 'LFIS UI Demo' }}>
          {message => <h1 className="App__title">{message}</h1>}
        </FormattedMessage>
      </header>
      <main className="App__main">{showing === Showing.Login && <LoginFormContainer />}</main>
    </div>
  );
};

export default App;
