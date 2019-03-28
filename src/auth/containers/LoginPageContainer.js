import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { logIn } from '..'
import LoginPage from '../organisms/LoginPage'

const LoginPageContainer = ({ loggedIn, logInAction }) =>
  loggedIn ? <Redirect to="/home" /> : <LoginPage logInAction={logInAction} />

LoginPageContainer.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginAction: PropTypes.func.isRequired,
}

const mstp = state => ({ loggedIn: state.auth.loggedIn })
const mdtp = {
  logInAction: logIn,
}

export default connect(
  mstp,
  mdtp
)(LoginPageContainer)
