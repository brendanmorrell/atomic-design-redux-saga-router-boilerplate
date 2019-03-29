import React from 'react'
import PropTypes from 'prop-types'

const TodoPage = ({ addTodoAction }) => {
  return (
    <div>
      todo page
      <button onClick={() => addTodoAction('this is a todo')}>Add A Todo</button>
    </div>
  )
}

TodoPage.propTypes = {}

export default TodoPage
