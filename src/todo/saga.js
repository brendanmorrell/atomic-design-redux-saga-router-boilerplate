import { all, takeLatest, put } from 'redux-saga/effects'
import { todoAdded, actions } from '.'

export function* addTodoSaga({ payload: todo }) {
  try {
    debugger
    yield put(todoAdded(todo))
  } catch (error) {
    yield error
  }
}

export default function*() {
  yield all([takeLatest(actions.ADD_TODO, addTodoSaga)])
}
