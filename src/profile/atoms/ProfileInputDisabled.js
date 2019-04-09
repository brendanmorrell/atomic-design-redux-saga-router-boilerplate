import React from 'react';
import styled from 'styled-components'

import MailSrc from '../../assets/icons/auth-mail.svg';
import LockSrc from '../../assets/icons/auth-lock.svg';

import Input from '../../storybook/atoms/Input';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  position: absolute;
`;

const MailIcon = styled(Icon)`
  top: 14px;
  left: 11px;
  width: 19px;
  height: 13px;
`;

const LockIcon = styled(Icon)`
  top: 13px;
  left: 12px;
  width: 15px;
  height: 16px;
`;

const Change = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 75px;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  background-color: #A20000;
  cursor: pointer;
`;

const ProfileInputDisabled = ({ type, onClick }) => (
  <Container>
    <Input
      name='email'
      disabled={true}
      placeholder={type === 'email' ? 'Email' : 'Password'}
      inputStyle={{
        paddingLeft: '40px'
      }} />

    { type === 'email' ?
      <MailIcon src={MailSrc} />
    :
      <LockIcon src={LockSrc} />
    }

    <Change onClick={onClick}>
      Change
    </Change>

  </Container>
);

export default ProfileInputDisabled;
