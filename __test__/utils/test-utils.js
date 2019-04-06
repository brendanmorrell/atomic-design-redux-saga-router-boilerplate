import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/theme';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { storeFactory, history } from '../../src/store';

export const store = storeFactory({});
const customRender = (node, options) =>
  render(
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>{node}</ThemeProvider>
      </Router>
    </Provider>,
    options,
  );

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender as render };
