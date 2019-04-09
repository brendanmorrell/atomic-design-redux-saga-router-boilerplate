import React from 'react';
import styled from 'styled-components'
import { reduxForm, Form } from 'redux-form';
import { connect } from 'react-redux';

import { setProfileData } from '../';

import SidebarHR from '../../sidebar/atoms/SidebarHR';
import Button from '../../storybook/atoms/Button';
import Checkbox from '../../storybook/atoms/Checkbox';
import ProfileInputDisabled from '../atoms/ProfileInputDisabled';
import ProfileRewardsProgram from '../atoms/ProfileRewardsProgram';
import ProfileSignOut from '../atoms/ProfileSignOut';
import ProfileSidebarPersonal from '../molecules/ProfileSidebarPersonal';
import ProfileSidebarGender from '../molecules/ProfileSidebarGender';

const Container = styled.div`
  padding-top: 5px;
`;

const Delete = styled.div`
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  margin-top: 20px;
`;

const ProfileSidebarProfile = ({ user, setProfileDataAction }) => {
  
  return (
    <Container>
      <ProfileSignOut />
      <Form>

        <ProfileInputDisabled
          type='email'
          onClick={() => { setProfileDataAction({ activePage: 'updateemail' }) }} />

        <ProfileInputDisabled
          type='password'
          onClick={() => { 
            // setProfileDataAction({ activePage: 'updatepassword' }) 
          }} />

        <Checkbox
          name='promotions'
          formName='profile'
          label='Yes, I would like to receive emails regarding special promotions and product updates.' />

        <ProfileRewardsProgram formName='profile' />
        
        <ProfileSidebarPersonal
          formName='profile' />

        <ProfileSidebarGender
          formName='profile' />

      </Form>

      <Button 
        style={{marginTop:'20px'}}
        disabled={true}>
        
        Update
      </Button>

      <SidebarHR />

      <Delete>
        Delete My Profile
      </Delete>
    </Container>
  )
};

const validate = values => {
  const error = {};

  return error;
};

const mstp = state => ({
  user: state.profile.user,
});

const mdtp = {
  setProfileDataAction: setProfileData,
};

export default connect(mstp, mdtp)(reduxForm({
  form: 'profile',
  validate,
})(ProfileSidebarProfile));