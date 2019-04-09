import { handleActions, createAction } from 'redux-actions';
import mapActions from '../helpers/mapActions';

export const actions = mapActions(
  [
    'SHOW_MENU',
    'HIDE_MENU',
  ],
  'SIDEBAR',
);

export const showMobileMenu = createAction(actions.SHOW_MENU, payload => payload);
export const hideMobileMenu = createAction(actions.HIDE_MENU, payload => payload);

const initialState = {
  showMenu: false,
};

export default handleActions(
  {
    [actions.SHOW_MENU]: state => ({ ...state, showMenu: true }),
    [actions.HIDE_MENU]: state => ({ ...state, showMenu: false }),
  },
  initialState,
);
