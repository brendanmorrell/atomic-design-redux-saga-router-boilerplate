import React from 'react';
import styled from 'styled-components'
import { reduxForm, Form, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import { setData } from '../../auth';

// import AuthInputEmail from '../atoms/AuthInputEmail';
// import AuthInputPassword from '../atoms/AuthInputPassword';
// import AuthLoginSocial from '../atoms/AuthLoginSocial';
// import AuthRewardsProgram from '../atoms/AuthRewardsProgram';
// import Button from '../../storybook/atoms/Button';
import Input from '../../storybook/atoms/Input';
import Asterisk from '../../storybook/atoms/Asterisk';

// const selector = formValueSelector('signup');

const Header = styled.div`
  font-weight: 600;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 5px;
`;

const Container = styled.div`
  background-color: #FAFAFA;
  border: 1px solid #EEEEEE;
  border-radius: 5px;
  padding: 5px;
`;

const Flex = styled.div` 
  display: flex;

  div:first-child {
    flex: 0 0 calc(60% - 10px);
    margin-right: 10px;
  }

  div:nth-child(2) {
    flex: 0 0 40%;
  }
`;

const ProfileSidebarPersonal = ({ formName,  }) => { // promotions
  console.log('formANme', formName)
  return (
    <div>
      <Header>
        Personal Information
      </Header>

      <Container>
        <Flex>
          <Input
            name='firstname'
            placeholder='First Name'
            color='white'
            disabled={(formName === 'profile')} />

          <Input
            name='lastName'
            placeholder='Last Name'
            color='white'
            disabled={formName === 'profile'} />
        </Flex>

        <Input
          name='dob'
          placeholder='Birthday (MM/DD/YYYY)'
          color='white' />

        <Input
          name='country'
          placeholder='Country'
          color='white' />
        <Input
          name='address'
          placeholder='Address'
          color='white' />
        
        <Flex>
          <Input
            name='address2'
            placeholder='APT, Suite, Floor'
            color='white' />
          <Input
            name='zip'
            placeholder='Zip Code'
            color='white' />
        </Flex>

        <Flex>
          <Input
            name='city'
            placeholder='City'
            color='white' />
          <Input
            name='state'
            placeholder='State'
            color='white' />
        </Flex>

        <Input
          name='phone'
          placeholder='Phone Number'
          color='white' />

        <Asterisk
          content={`It will be used to contact you about your<span style="color:#A20000"> order if necessary</span>`} />

        <Input
          name='preferedStore'
          placeholder='Prefered Store'
          color='white' />

      </Container>
    </div>
  )
};

export default ProfileSidebarPersonal;
