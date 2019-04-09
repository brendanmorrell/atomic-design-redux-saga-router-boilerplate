import { handleActions, createAction } from 'redux-actions'
import mapActions from '../helpers/mapActions'

export const actions = mapActions(['SET_DATA'], 'AUTH')

export const setProfileData = createAction(actions.SET_DATA)

const initialState = {
  activePage: 'profile',
  user: {
    firstName: 'Charles',
    lastName: 'Xavier',
    email: 'charles.xavier@xmen.com',
    password: '12345678',
    promotions: false,
    rewards: false,
    dob: '07/13/1940',
    country: 'USA',
    address: '1407 Graymalkin Lane',
    city: 'Salem Center',
    address2: '',
    state: 'NY',
    phone: '8003129951',
    gender: 'male',
  }
}

export default handleActions(
  {
    [actions.SET_DATA]: (state, { payload }) => ({ ...state, ...payload }),
  },
  initialState
)
