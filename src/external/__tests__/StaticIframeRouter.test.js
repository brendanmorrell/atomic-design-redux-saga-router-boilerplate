import React from 'react';
import { renderWithRouter, fireEvent, render } from 'test-utils';
import StaticIFrameRouter from '../organisms/StaticIframeRouter';
import { debugDOM } from 'react-testing-library';
import AppContainer from '../../AppContainer';

test('snapshot', () => {
  const { container } = renderWithRouter(<StaticIFrameRouter />);
  expect(container.firstChild).toMatchSnapshot();
});
