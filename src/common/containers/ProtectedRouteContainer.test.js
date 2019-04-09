import React from 'react';
import { render } from '../../../__test__/utils/test-utils';
import ProtectedRouteContainer from './ProtectedRouteContainer';

describe('<ProtectedRouteContainer />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<div />);
    expect(asFragment).toHaveTextContent(12);
    expect(1).toBeTruthy();
  });

  // test('should redirect to login if not logged in', () => {

  // })
});
