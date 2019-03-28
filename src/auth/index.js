import { handleActions, createAction } from 'redux-actions'
import mapActions from '../helpers/mapActions'

export const actions = mapActions(['LOGIN', 'LOGOUT', 'SET_USER', 'LOGIN_SUCCESS'], 'AUTH')

export const logIn = createAction(actions.LOGIN, values => values)
export const setUser = createAction(actions.SET_USER, user => user)
export const loginSuccess = createAction(actions.LOGIN_SUCCESS)
export const logOut = createAction(actions.LOGOUT)

const initialState = {
  loggedIn: false,
  user: null,
}

export default handleActions(
  {
    [actions.LOGOUT]: () => initialState,
    [actions.LOGIN_SUCCESS]: state => ({ ...state, loggedIn: true }),
    [actions.SET_USER]: (state, { payload }) => ({ ...state, user: payload }),
  },
  initialState
)
