import { handleActions, createAction } from 'redux-actions'
import mapActions from '../helpers/mapActions'

export const actions = mapActions([
    'OPEN', 
    'CLOSE', 
    'SELECT_LOCATION', 
    'SELECT_STATE',
    'SELECT_STORE',
  ], 
  'HEADER'
)

export const open = createAction(actions.OPEN)
export const close = createAction(actions.CLOSE)
export const selectLocation = createAction(actions.SELECT_LOCATION)
export const selectState = createAction(actions.SELECT_STATE)
export const selectStore = createAction(actions.SELECT_STORE)

const initialState = {
  activeMenu: null,
  location: null,
  state: null,
  store: null,
}

export default handleActions(
  {
    [actions.OPEN]: (state, action) => ({
      ...state,
      activeMenu: action.payload,
    }),
    [actions.CLOSE]: (state, action) => ({
      ...state,
      activeMenu: null,
    }),
    [actions.SELECT_LOCATION]: (state, action) => ({
      ...state,
      location: action.payload,
    }),
  },
  initialState
)
