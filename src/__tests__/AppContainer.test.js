import React from 'react';
import { render } from 'test-utils';
import AppContainer from '../AppContainer';
import staticSites from '../constants/staticSites';

test('routes should render appropriate iframe', () => {
  const { getByTestId, history } = render(<AppContainer />);
  staticSites.forEach(({ path, url }) => {
    history.push(path);
    expect(getByTestId(url)).toBeTruthy();
  });
});
