import React from 'react';
import { render } from 'test-utils';
import AppContainer from '../AppContainer';

test('snapshot', () => {
  const { container } = render(<AppContainer />);
  expect(container.firstChild).toMatchSnapshot();
});
