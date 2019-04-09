import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { setAuthData } from '../../auth/';

import SidebarHeaderButton from '../../storybook/atoms/SidebarHeaderButton';

const Content = styled.div`
  width: calc(100% - 40px);
  height: 27px;
  border-bottom: 1px solid #DDDDDD;
  margin: 0 20px;
  padding: 20px 0 0 0;
`;

const AuthSidebarHeader = ({ activePage, setAuthDataAction }) => (
  <Content>
    
    <SidebarHeaderButton
      label='Sign In'
      page='signin'
      activePage={activePage}
      action={() => { setAuthDataAction({ activePage: 'signin' }) }} />

    <SidebarHeaderButton
      label='Create Account'
      page='signup'
      activePage={activePage}
      action={() => { setAuthDataAction({ activePage: 'signup' }) }} />
      
  </Content>
);

const mstp = state => ({ 
  activePage: state.auth.activePage 
});

const mdtp = {
  setAuthDataAction: setAuthData,
};

export default connect(mstp, mdtp)(AuthSidebarHeader);
