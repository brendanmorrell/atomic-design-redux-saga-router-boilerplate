import React from 'react';
import styled from 'styled-components';

import ProfileSidebarHeader from '../molecules/ProfileSidebarHeader';
import ProfileSidebarBody from './ProfileSidebarBody';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const ProfileSidebar = () => (
  <Container>
    <ProfileSidebarHeader />
    <ProfileSidebarBody />
  </Container>
);
export default ProfileSidebar;
