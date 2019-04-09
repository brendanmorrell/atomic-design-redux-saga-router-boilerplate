import { createAction, handleActions } from 'redux-actions';
import uuid from 'uuid/v1';
import mapActions from '../helpers/mapActions';

export const actions = mapActions(
  ['ADD_TOAST', 'REMOVE_TOAST', 'ADD_SIDEBAR_NOTIFICATION', 'REMOVE_SIDEBAR_NOTIFICATION'],
  'NOTIFICATIONS',
);

export const addToastNotification = createAction(
  actions.ADD_TOAST,
  message => message,
);
export const removeToastNotification = createAction(
  actions.REMOVE_TOAST,
  message => message,
);

export const addSidebarNotification = createAction(
  actions.ADD_SIDEBAR_NOTIFICATION,
  message => message,
);
export const removeSidebarNotification = createAction(
  actions.REMOVE_SIDEBAR_NOTIFICATION,
  message => message,
);

const initialState = {
  toastNotifications: [],
  sidebarNotification: null,
};

const toast = payload => ({
  uuid: payload.uuid || uuid(),
  type: payload.type || 'success',
  message: payload.message || '',
  timer: payload.timer || 5000,
  sticky: payload.sticky || false,
});

export default handleActions(
  {
    [actions.ADD_TOAST]: (state, { payload }) => ({
      ...state,
      toastNotifications: [...state.toastNotifications, toast(payload)],
    }),
    [actions.REMOVE_TOAST]: (state, { payload }) => ({
      ...state,
      toastNotifications: state.toastNotifications.filter(
        x => x.uuid !== payload,
      ),
    }),
    [actions.ADD_SIDEBAR_NOTIFICATION]: (state, { payload }) => ({
      ...state,
      sidebarNotification: toast(payload),
    }),
    [actions.REMOVE_SIDEBAR_NOTIFICATION]: (state, { payload }) => ({
      ...state,
      sidebarNotification: null,
    }),
  },
  initialState,
);
