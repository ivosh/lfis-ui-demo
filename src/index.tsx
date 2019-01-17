import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as csLocaleData from 'react-intl/locale-data/cs';
import * as enLocaleData from 'react-intl/locale-data/en';
import { Provider } from 'react-redux';

import App from './App/App';
import translations from './i18n/locales';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

addLocaleData(csLocaleData);
addLocaleData(enLocaleData);
const locale = window.location.search.replace('?locale=', '') || 'en';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider key={locale} locale={locale} messages={translations[locale]}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
