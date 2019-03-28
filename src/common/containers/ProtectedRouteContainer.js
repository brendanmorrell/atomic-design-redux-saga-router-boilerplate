import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'

const ProtectedRoute = ({ loggedIn, component, ...props }) =>
  loggedIn ? <Route component={component} {...props} /> : <Redirect to="/login" />

const mstp = state => ({
  loggedIn: state.auth.loggedIn,
})

export default connect(mstp)(ProtectedRoute)
