import { handleActions, createAction } from 'redux-actions'
import mapActions from '../helpers/mapActions'
import { addTodoSaga } from './saga'

export const actions = mapActions(['ADD_TODO', 'TODO_ADDED'], 'TODO')

export const addTodo = createAction(actions.ADD_TODO)
export const todoAdded = createAction(actions.TODO_ADDED)

const initialState = {
  todos: [],
}

export default handleActions(
  {
    [actions.TODO_ADDED]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
  },
  initialState
)
