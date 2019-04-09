import React from 'react';
import styled from 'styled-components'
import { reduxForm, Form } from 'redux-form';
import { connect } from 'react-redux';

import { setAuthData } from '../';

import SidebarHR from '../../sidebar/atoms/SidebarHR';
import AuthInputEmail from '../atoms/AuthInputEmail';
import AuthInputPassword from '../atoms/AuthInputPassword';
import AuthLoginSocial from '../atoms/AuthLoginSocial';
import Button from '../../storybook/atoms/Button';

const Container = styled.div`
  padding-top: 5px;
`;

const Forgot = styled.div`
  width: 100%;
  text-align: right;
  cursor: pointer;
  font-size: 13px;
`;

const AuthSidebarSignIn = ({ valid, setAuthDataAction }) => (
  <Container>
    <AuthLoginSocial media='fb' type='signin' />
    <AuthLoginSocial media='google' type='signin' />
    
    <SidebarHR
      label='OR' />
      
    <Form>
      <AuthInputEmail />
      <AuthInputPassword />
    </Form>

    <Forgot
      onClick={() => { setAuthDataAction({activePage: 'forgotpassword'}) }}>
      Forgot Your Password?
    </Forgot>

    <Button 
      style={{marginTop:'20px'}}
      disabled={!valid}>
      
      Sign In
    </Button>
  </Container>
);

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
  form: 'signin',
  validate,
})(AuthSidebarSignIn));
