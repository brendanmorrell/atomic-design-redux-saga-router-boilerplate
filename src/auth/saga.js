import { all, takeLatest, put } from 'redux-saga/effects'
import { actions, loginSuccess } from '.'

export function* loginSaga() {
  try {
    yield put(loginSuccess())
  } catch (error) {
    yield error
  }
}

export default function*() {
  yield all([takeLatest(actions.LOGIN, loginSaga)])
}
