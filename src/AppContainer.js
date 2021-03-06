import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router';

import theme from './theme';
import GlobalStyle from './theme/GlobalStyle';

import SessionTimeoutContainer from './auth/containers/SessionTimeoutContainer';
import StaticIFrameRouter from './external/organisms/StaticIframeRouter';

import HeaderContainer from './header/containers/HeaderContainer';
import SidebarContainer from './sidebar/containers/SidebarContainer';
import MobileMenuContainer from './mobilemenu/containers/MobileMenuContainer';
import AuthUpdatePassword from './auth/containers/AuthUpdatePassword';

const AppContainer = ({ loggedIn }) => {
  return (
    <SessionTimeoutContainer>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />

          <HeaderContainer />
          <SidebarContainer />
          <MobileMenuContainer />

          <Switch>
            <Route path="/updatepassword" component={AuthUpdatePassword} />
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
