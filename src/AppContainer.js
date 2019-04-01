import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router';

import GlobalStyle from './theme/GlobalStyle';
import theme from './theme';
import SessionTimeoutContainer from './auth/containers/SessionTimeoutContainer';
import ProtectedRouteContainer from './common/containers/ProtectedRouteContainer';
import LoginPageContainer from './auth/containers/LoginPageContainer';
import HomePageContainer from './home/containers/HomePageContainer';
import Header from './common/molecules/Header';
import StaticIFrameRouter from './external/organisms/StaticIframeRouter';
const AppContainer = ({ loggedIn }) => {
  return (
    <SessionTimeoutContainer>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route path="/login" component={LoginPageContainer} />
            <ProtectedRouteContainer
              exact
              path="/"
              render={() => <Redirect to="/home" />}
            />
            <ProtectedRouteContainer
              path="/home"
              component={HomePageContainer}
            />
            <StaticIFrameRouter />
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
