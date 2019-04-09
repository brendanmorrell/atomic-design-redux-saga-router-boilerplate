import { handleActions, createAction } from 'redux-actions';
import mapActions from '../helpers/mapActions';
import states from './constantsWithoutAPIs/states';
import stores from './constantsWithoutAPIs/stores';

export const actions = mapActions(
  [
    'RESET',
    'SET_DATA',
  ],
  'CONSTANT',
);

export const reset = createAction(actions.RESET);
export const setData = createAction(actions.SET_DATA);

const initialState = {
  selectLocation : {
    states,
    stores,
  }
};

export default handleActions(
  {
    [actions.RESET]: () => initialState,
    [actions.SET_DATA]: (state, { payload }) => ({ ...state, ...payload }),
  },
  initialState,
);
