import React from 'react';
import { render } from '../../../__test__/utils/test-utils';
import ProtectedRouteContainer from './ProtectedRouteContainer';
describe('<ProtectedRouteContainer />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<ProtectedRouteContainer />);
    expect(asFragment).toMatchSnapshot();
  });
});
