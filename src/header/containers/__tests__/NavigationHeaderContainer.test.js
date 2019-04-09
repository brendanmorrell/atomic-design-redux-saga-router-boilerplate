import React from 'react';
import { render, fireEvent, debugDOM } from 'test-utils';

import NavigationHeaderContainer from '../NavigationHeaderContainer';
import staticSites from '../../../constants/staticSites';

test('snapshot', () => {
  const { container } = render(<NavigationHeaderContainer />);
  expect(container.firstChild).toMatchSnapshot();
});

test('all static links lead to RR routes', () => {
  const { getByTestId, getByText } = render(<NavigationHeaderContainer />);
  expect(window.location.pathname).toBe('/');

  const leftClick = { button: 0 };

  staticSites.forEach(({ path, url }) => {
    let link;
    if (path === '/statemade') {
      const parentElement = getByText(/our brands/i);
      fireEvent.mouseOver(parentElement);
    }
    link = getByTestId(path);
    fireEvent.click(link, leftClick);
    expect(window.location.pathname).toBe(path);
    // const iframe = get
  });
});
