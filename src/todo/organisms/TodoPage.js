import React from 'react'
import PropTypes from 'prop-types'
import TodoList from '../molecules/TodoList'

const TodoPage = ({ addTodoAction, todos }) => {
  return (
    <div>
      <h1>todo page</h1>
      <button onClick={() => addTodoAction('this is a todo')}>Add A Todo</button>
      <TodoList todos={todos} />
    </div>
  )
}

TodoPage.propTypes = {
  addTodoAction: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TodoPage
