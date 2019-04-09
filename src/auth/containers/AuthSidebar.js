import React from 'react';
import styled from 'styled-components';

import AuthSidebarHeader from '../molecules/AuthSidebarHeader';
import AuthSidebarBody from './AuthSidebarBody';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const AuthSidebar = () => (
  <Container>
    <AuthSidebarHeader />
    <AuthSidebarBody />
  </Container>
);
export default AuthSidebar;
