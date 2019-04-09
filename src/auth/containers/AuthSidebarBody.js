import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AuthSidebarSignIn from '../organisms/AuthSidebarSignIn';
import AuthSidebarSignUp from '../organisms/AuthSidebarSignUp';
import AuthSidebarForgotPassword from '../organisms/AuthSidebarForgotPassword';

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 20px 20px;
`;

const AuthSidebarBody = ({ activePage }) => (
  <Container>
    
    { activePage === 'signin' && <AuthSidebarSignIn /> }
    { activePage === 'signup' && <AuthSidebarSignUp /> }
    { activePage === 'forgotpassword' && <AuthSidebarForgotPassword /> }

  </Container>
);

const mstp = state => ({ 
  activePage: state.auth.activePage 
});

export default connect(mstp, null)(AuthSidebarBody);
