import React from 'react';
import styled from 'styled-components'
import { reduxForm, Form } from 'redux-form';
import { connect } from 'react-redux';

import { setProfileData } from '../';

import MailSrc from '../../assets/icons/auth-mail.svg';

import ProfileSignOut from '../atoms/ProfileSignOut';
import Input from '../../storybook/atoms/Input';
import Button from '../../storybook/atoms/Button';
import SidebarTitle from '../../storybook/atoms/SidebarTitle';
import SidebarText from '../../storybook/atoms/SidebarText';

const Container = styled.div`
  padding-top: 10px 11px;
`;

const StyledForm = styled(Form)`
  background-color: #FAFAFA;
  border: 1px solid #EEEEEE;
  border-radius: 5px;
  padding: 5px;
`;

const Email = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #EFEFEF;
  border: 1px solid #EEEEEE;
  color: #858585;
  font-size: 12px;
  line-height: 40px;
  padding-left: 40px;
  box-sizing: border-box;
  margin-bottom: 10px;

  img {
    position: absolute;
    top: 14px;
    left: 11px;
    width: 19px;
    height: 13px;
  }
`;

const Flex = styled.div` 
  display: flex;

  button {
    margin-top: 15px;
    flex: 0 0 calc(50% - 5px);
  }

  button:first-child {
    margin-right: 10px;
  }
`;

const ProfileSidebarUpdateEmail = ({ user, setProfileDataAction }) => {
  
  return (
    <Container>
      <ProfileSignOut />
      
      <SidebarTitle
        text='Change Email Address' />

      <SidebarText 
        text='No problem! Just enter your new email address and password for change confirmation.' /> 

      <Email>
        <img src={MailSrc} alt='Email' />

        elisha.lee@medmen.com
      </Email>

      <StyledForm>

        <Input
          name='email'
          placeholder='New Email address'
          color='white'
        />

        <Input
          name='email2'
          placeholder='Confirm Email address'
          color='white'
        />

        <Input
          name='email2'
          type='password'
          placeholder='Password to Confirm Change'
          color='white'
        />

        <Flex>
          <Button
            color='black'
            onClick={() => { setProfileDataAction({ activePage: 'profile' }) }}>
            Cancel
          </Button>

          <Button>
            Update
          </Button>
        </Flex>
      </StyledForm>

    </Container>
  )
};

const validate = values => {
  const error = {};
  // const requiredFields = [
  //   'email',
  //   'password',
  // ];

  // requiredFields.forEach(field => {
  //   if (!values[field]) error[field] = 'Required';
  // });

  return error;
};

const mstp = state => ({
  user: state.profile.user,
});

const mdtp = {
  setProfileDataAction: setProfileData,
};

export default connect(mstp, mdtp)(reduxForm({
  form: 'updateemail',
  validate,
})(ProfileSidebarUpdateEmail));