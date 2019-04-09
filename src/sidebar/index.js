import { handleActions, createAction } from 'redux-actions';
import mapActions from '../helpers/mapActions';

export const actions = mapActions(
  [
    'RESET',
    'SHOW_MENU',
    'SHOW_DETAILS',
    'HIDE_MENU',
    'HIDE_DETAILS',
    'NAVIGATE',
    'BACK',
  ],
  'SIDEBAR',
);

export const resetSidebar = createAction(actions.RESET);
export const showMenu = createAction(actions.SHOW_MENU, payload => payload);
export const hideMenu = createAction(actions.HIDE_MENU, payload => payload);
export const showDetails = createAction(
  actions.SHOW_DETAILS,
  payload => payload,
);
export const hideDetails = createAction(
  actions.HIDE_DETAILS,
  payload => payload,
);
export const navigate = createAction(actions.NAVIGATE, payload => payload);
export const back = createAction(actions.BACK);

const initialState = {
  showDetails: false,
  detailInfo: {},
  showMenu: false,
  history: [],
};

const show = (state, action) => ({
  ...state,
  showDetails: true,
  detailInfo: action.payload,
  history: [action.payload],
});

const hide = state => ({
  ...state,
  showDetails: false,
  detailInfo: {},
  history: [],
});

const push = (state, action) => {
  const { history } = state;
  history.push(action.payload);
  return {
    ...state,
    history,
    showDetails: true,
    detailInfo: action.payload,
  };
};

const pop = state => {
  const { history } = state;
  let detailInfo;
  let stayOpen = true;
  if (history.length > 0) {
    history.pop();
    detailInfo = history[history.length - 1];
  } else {
    detailInfo = {};
    stayOpen = false;
  }

  return {
    ...state,
    history,
    showDetails: stayOpen,
    detailInfo,
  };
};

export default handleActions(
  {
    [actions.SHOW_DETAILS]: show,
    [actions.HIDE_DETAILS]: hide,
    [actions.SHOW_MENU]: state => ({ ...state, showMenu: true }),
    [actions.HIDE_MENU]: state => ({ ...state, showMenu: false }),
    [actions.NAVIGATE]: push,
    [actions.BACK]: pop,
    [actions.RESET]: () => initialState,
  },
  initialState,
);
