import React from 'react';
import styled from 'styled-components';

import MailSrc from '../../assets/icons/auth-mail.svg';

import Input from '../../storybook/atoms/Input';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  position: absolute;
  top: 14px;
  left: 11px;
  width: 19px;
  height: 13px;
`;

const AuthInputEmail = () => (
  <Container>
    <Input
      name="email"
      placeholder="Email"
      inputStyle={{
        paddingLeft: '40px',
      }}
    />

    <Icon src={MailSrc} />
  </Container>
);

export default AuthInputEmail;
