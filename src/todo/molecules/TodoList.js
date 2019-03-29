import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../atoms/Todo'

const TodoList = ({ todos }) =>
  todos.length > 0 ? (
    todos.map((todo, i) => <Todo todo={todo} number={i + 1} />)
  ) : (
    <div>You're all done for the day!</div>
  )

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TodoList
