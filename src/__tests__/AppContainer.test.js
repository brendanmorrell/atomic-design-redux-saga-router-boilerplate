import React from 'react';
import { render, fireEvent, debugDOM, flushPromises } from 'test-utils';
import AppContainer from '../AppContainer';

test('snapshot', () => {
  const { container } = render(<AppContainer />);
  expect(container.firstChild).toMatchSnapshot();
});

test('should render all routes', () => {
  const { getByText } = render(<AppContainer />);
  const emberLink = getByText('ember');
  console.log(debugDOM(document.body));
  fireEvent.click(emberLink);
  expect(window.location.pathname).toBe('');
});
