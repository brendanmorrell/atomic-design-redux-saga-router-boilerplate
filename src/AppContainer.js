import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Switch, Route, Redirect } from 'react-router'

import GlobalStyle from './theme/GlobalStyle'
import theme from './theme'
import SessionTimeoutContainer from './auth/containers/SessionTimeoutContainer'
import ProtectedRoute from './common/containers/ProtectedRouteContainer'
import LoginPageContainer from './auth/containers/LoginPageContainer'
import HomePageContainer from './home/containers/HomePageContainer'

const AppContainer = ({ loggedIn }) => (
  <SessionTimeoutContainer>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Switch>
          <Route path="/login" component={LoginPageContainer} />
          <ProtectedRoute exact path="/" render={() => <Redirect to="/home" />} />
          <ProtectedRoute path="/home" component={HomePageContainer} />
        </Switch>
      </>
    </ThemeProvider>
  </SessionTimeoutContainer>
)

const mstp = state => state
const mdtp = {}

export default connect(
  mstp,
  mdtp
)(AppContainer)
