import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoPage from '../organisms/TodoPage'
import { addTodo } from '..'

const TodoPageContainer = props => <TodoPage {...props} />

TodoPageContainer.propTypes = {}

const mstp = state => ({ todos: state.todo.todos })

const mdtp = {
  addTodoAction: addTodo,
}

export default connect(
  mstp,
  mdtp
)(TodoPageContainer)
