import React from 'react';
import { render, fireEvent, debugDOM, flushPromises } from 'test-utils';
import NavigationHeaderContainer from '../containers/NavigationHeaderContainer';

test('snapshot', () => {
  const { container } = render(<NavigationHeaderContainer />);
  expect(container.firstChild).toMatchSnapshot();
});

test('should render all routes', () => {
  const { getByText } = render(<NavigationHeaderContainer />);
  // const shopLink = getByText('Shop');
  // console.log(debugDOM(document.body));
  // fireEvent.click(shopLink);
  // expect(window.location.pathname).toBe('');
});

// { title: 'Shop', url: '/shop', menu: null },
// {
//   title: 'Our Brands',
//   url: null,
//   menu: [{ title: '[statemade]', url: '/brands' }],
// },
// { title: 'Apparel', url: '/apparel', menu: null },
// { title: 'EMBER', url: '/blog', menu: null },
// { title: 'Investors', url: '/investors', menu: null },
