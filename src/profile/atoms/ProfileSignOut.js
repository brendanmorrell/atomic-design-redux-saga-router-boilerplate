import React from 'react';
import styled from 'styled-components'

const Signout = styled.div`
  width: 100%;
  text-align: right;
  cursor: pointer;
  font-size: 12px;
  margin: 8px 0 12px 0;
`;

const ProfileSignOut = () => (
  <Signout>
    Sign Out
  </Signout>
);

export default ProfileSignOut;