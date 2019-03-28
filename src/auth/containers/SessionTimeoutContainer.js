import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import IdleTimer from 'react-idle-timer'
import { logOut } from '..'

const timeoutMinutes = 15

const SessionTimeout = ({ children, logoutAction }) => (
  <IdleTimer element={document} onIdle={logoutAction} timeout={60000 * timeoutMinutes}>
    {children}
  </IdleTimer>
)

SessionTimeout.propTypes = {
  children: PropTypes.element.isRequired,
  logoutAction: PropTypes.func.isRequired,
}

const mdtp = {
  logoutAction: logOut,
}

export default connect(
  null,
  mdtp
)(SessionTimeout)
