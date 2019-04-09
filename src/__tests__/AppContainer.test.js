import React from 'react';
import { render, fireEvent, debugDOM, flushPromises } from 'test-utils';
import AppContainer from '../AppContainer';

test('snapshot', () => {
  const { container } = render(<AppContainer />);
  expect(container.firstChild).toMatchSnapshot();
});
