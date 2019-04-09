import React from 'react';
import { open, close } from '..';
import { render } from 'test-utils';
import { storeFactory } from '../../store';

test('should toggle activeMenu to open', () => {
  const payload = 'location';
  const store = storeFactory({});
  let { activeMenu } = store.getState().header;

  expect(activeMenu).toBeNull();

  store.dispatch(open(payload));
  ({ activeMenu } = store.getState().header);
  expect(activeMenu).toBe(payload);

  store.dispatch(close());
  ({ activeMenu } = store.getState().header);
  expect(activeMenu).toBeNull();
});
