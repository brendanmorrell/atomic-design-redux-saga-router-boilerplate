import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Switch, Route, Redirect } from 'react-router'

import theme from './theme'
import GlobalStyle from './theme/GlobalStyle'

import SessionTimeoutContainer from './auth/containers/SessionTimeoutContainer'
import StaticIFrameRouter from './external/organisms/StaticIframeRouter'

import Header from './header/containers/Header'
import SidebarContainer from './sidebar/containers/SidebarContainer';
import MobileMenuContainer from './mobilemenu/containers/MobileMenuContainer';
import AuthUpdatePassword from './auth/containers/AuthUpdatePassword';

const AppContainer = ({ loggedIn }) => {
  return (
    <SessionTimeoutContainer>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          
          <Header />
          <SidebarContainer />
          <MobileMenuContainer />
          
          <Switch>
            <Route path="/updatepassword" component={AuthUpdatePassword} />
            <StaticIFrameRouter />
            {/* 
            <Route path="/login" component={LoginPageContainer} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <ProtectedRouteContainer path="/home" component={HomePageContainer} /> 
            */}
          </Switch>
        </>
      </ThemeProvider>
    </SessionTimeoutContainer>
  );
};

const mstp = state => ({ loggedIn: state.auth.loggedIn });

export default connect(
  mstp,
  null,
)(AppContainer);
