import React from 'react';
import styled from 'styled-components'
import { reduxForm, Form, } from 'redux-form';
import { connect } from 'react-redux';

import { setAuthData } from '../';

import SidebarHR from '../../sidebar/atoms/SidebarHR';
import AuthInputEmail from '../atoms/AuthInputEmail';
import AuthInputPassword from '../atoms/AuthInputPassword';
import AuthLoginSocial from '../atoms/AuthLoginSocial';
import ProfileRewardsProgram from '../../profile/atoms/ProfileRewardsProgram';
import ProfileSidebarPersonal from '../../profile/molecules/ProfileSidebarPersonal';
import ProfileSidebarGender from '../../profile/molecules/ProfileSidebarGender';
import Button from '../../storybook/atoms/Button';
import Checkbox from '../../storybook/atoms/Checkbox';
import Asterisk from '../../storybook/atoms/Asterisk';

const Container = styled.div`
  padding-top: 5px;
`;

const Social = styled.div`
  width: 100%;
  font-size: 14px;
  color: #858585;
  margin-top: 20px;
`;

const AuthSidebarSignUp = ({ valid,  }) => {
  
  return (
    <Container>

      <AuthLoginSocial media='fb' type='signup' />

      <AuthLoginSocial media='google' type='signup' />

      <Social>
        Signing Up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #shopmedmen.
      </Social>

      <SidebarHR
        label='OR' />
        

      <Form>
        <AuthInputEmail />
        <Asterisk
          content={`We'll send sign up confirmation and<span style="color:#A20000"> 10% Off coupon</span>`} />
        <AuthInputPassword />
        <Asterisk
          content={`Must be 8 or more characters`} />
        
        <Checkbox
          name='promotions'
          formName='signup'
          label='Yes, I would like to receive emails regarding special promotions and product updates.' />
      
        <ProfileRewardsProgram formName='signup' />

        <ProfileSidebarPersonal />
        
        <ProfileSidebarGender
          formName='signup' />
        
        <Checkbox
          name='privacy'
          formName='signup'
          label='I agree to MedMen collecting, processing, and storing my data in creating and maintaining an account.'
          style={{marginTop: 20}} />
        
        <Checkbox
          name='tos'
          formName='signup'
          label='I agree to the MedMen Terms of Service and Privacy Policy.'
          style={{marginTop: 20}} />
      </Form>

      <Button 
        style={{marginTop:'20px'}}
        disabled={!valid}>
        
        Join MedMen
      </Button>
    </Container>
  )
};

const validate = values => {
  const error = {};
  const requiredFields = [
    'email',
    'password',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) error[field] = 'Required';
  });

  return error;
};

const mdtp = {
  setAuthDataAction: setAuthData,
};

export default connect(null, mdtp)(reduxForm({
  form: 'signup',
  validate,
})(AuthSidebarSignUp));
