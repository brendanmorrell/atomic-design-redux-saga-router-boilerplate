import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { setProfileData } from '../../profile/';

import SidebarHeaderButton from '../../storybook/atoms/SidebarHeaderButton';

const Content = styled.div`
  width: calc(100% - 40px);
  height: 27px;
  border-bottom: 1px solid #DDDDDD;
  margin: 0 20px;
  padding: 20px 0 0 0;
`;

const ProfileSidebarHeader = ({ activePage, setProfileDataAction }) => (
  <Content>
    
    <SidebarHeaderButton
      label='Order History'
      page='orderhistory'
      activePage={activePage}
      action={() => { setProfileDataAction({ activePage: 'orderhistory' }) }} 
    />

    <SidebarHeaderButton
      label='Profile'
      page='profile'
      activePage={activePage}
      action={() => { setProfileDataAction({ activePage: 'profile' }) }} 
    />
      
  </Content>
);

const mstp = state => ({ 
  activePage: state.profile.activePage 
});

const mdtp = {
  setProfileDataAction: setProfileData,
};

export default connect(mstp, mdtp)(ProfileSidebarHeader);
