import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as realTheme from '../../src/theme';
import * as rtl from 'react-testing-library';
import { Provider } from 'react-redux';
import { storeFactory } from '../../src/store';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import { createBrowserHistory } from 'history';
import 'jest-dom/extend-expect';

const realStore = storeFactory({});

const customRender = (
  ui,
  { store = realStore, route = '/', theme = realTheme, ...renderOptions } = {},
) => {
  const history = createBrowserHistory();
  const utils = render(
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </Router>
    </Provider>,
  );
  return { ...utils, history, store, theme };
};

// re-export everything
// override render method
export const flushPromises = () =>
  new Promise(resolve => setTimeout(resolve, 0));

export * from 'react-testing-library';
const plainRender = rtl.render;
export { customRender as render };
export { plainRender };
