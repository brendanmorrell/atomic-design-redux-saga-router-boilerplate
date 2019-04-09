import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ProfileSidebarProfile from '../organisms/ProfileSidebarProfile';
import ProfileSidebarUpdateEmail from '../organisms/ProfileSidebarUpdateEmail';

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 20px 20px;
`;

const ProfileSidebarBody = ({ activePage }) => (
  <Container>

    { activePage === 'profile' && <ProfileSidebarProfile /> }
    { activePage === 'updateemail' && <ProfileSidebarUpdateEmail /> }

  </Container>
);

const mstp = state => ({ 
  activePage: state.profile.activePage 
});

export default connect(mstp, null)(ProfileSidebarBody);
