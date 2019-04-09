import React from 'react';
import { render } from 'test-utils';
import StaticIFrameRouter from '../StaticIframeRouter';
test('snapshot', () => {
  const { container } = render(<StaticIFrameRouter />);
  expect(container.firstChild).toMatchSnapshot();
});
