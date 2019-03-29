import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bold = styled.span`
  font-weight: 800;
`
const TodoItem = ({ todo, number }) => (
  <div>
    <Bold>#{number}</Bold> <span>{todo}</span>
  </div>
)

TodoItem.propTypes = { todo: PropTypes.string.isRequired, number: PropTypes.number.isRequired }

export default TodoItem
