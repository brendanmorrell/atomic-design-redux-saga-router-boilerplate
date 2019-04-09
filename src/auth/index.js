import { handleActions, createAction } from 'redux-actions'
import mapActions from '../helpers/mapActions'

export const actions = mapActions(['LOGIN', 'LOGOUT', 'SET_USER', 'LOGIN_SUCCESS', 'SET_DATA'], 'AUTH')

export const logIn = createAction(actions.LOGIN, values => values)
export const setUser = createAction(actions.SET_USER, user => user)
export const loginSuccess = createAction(actions.LOGIN_SUCCESS)
export const logOut = createAction(actions.LOGOUT)
export const setAuthData = createAction(actions.SET_DATA)

const initialState = {
  loggedIn: false,
  user: null,
  activePage: 'signin',
}

export default handleActions(
  {
    [actions.LOGOUT]: () => initialState,
    [actions.LOGIN_SUCCESS]: state => ({ ...state, loggedIn: true }),
    [actions.SET_USER]: (state, { payload }) => ({ ...state, user: payload }),
    [actions.SET_DATA]: (state, { payload }) => ({ ...state, ...payload }),
  },
  initialState
)
