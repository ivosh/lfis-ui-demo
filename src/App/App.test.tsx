import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const component = TestRenderer.create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
