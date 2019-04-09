import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as realTheme from '../../src/theme';
import * as rtl from 'react-testing-library';
import { Provider, compose } from 'react-redux';
import { storeFactory } from '../../src/store';
import { Router } from 'react-router-dom';
import { render, wait, debugDOM } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import 'jest-dom/extend-expect';
// import * as generate from 'til-shared/generate'

export const renderWithRouter = (
  ui,
  { route = '/', ...renderOptions } = {},
) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const utils = render(<Router history={history}>{ui}</Router>, renderOptions);
  const finishLoading = () =>
    wait(() => expect(utils.queryByText('Loading')).toBeNull());
  return {
    ...utils,
    finishLoading,
    history,
  };
};

export const renderWithTheme = (ui, { theme, ...renderOptions } = {}) =>
  render(
    <ThemeProvider theme={theme || realTheme}>{ui}</ThemeProvider>,
    renderOptions,
  );

const realStore = storeFactory({});

export const renderWithRedux = (ui, { store, ...renderOptions } = {}) =>
  render(<Provider store={store || realStore}>{ui}</Provider>, renderOptions);

const customRender = (
  ui,
  { store, route = '/', theme, ...renderOptions } = {},
) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const utils = render(
    <Provider store={store || realStore}>
      <Router history={history}>
        <ThemeProvider theme={theme || realTheme}>{ui}</ThemeProvider>
      </Router>
    </Provider>,
  );
  return { ...utils, history };
};

// re-export everything
// override render method
export const flushPromises = () =>
  new Promise(resolve => setTimeout(resolve, 0));

export * from 'react-testing-library';
const plainRender = rtl.render;
export { customRender as render };
export { plainRender };
