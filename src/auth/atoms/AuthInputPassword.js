import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import LockSrc from '../../assets/icons/auth-lock.svg';

import Input from '../../storybook/atoms/Input';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  ${props =>
    props.style &&
    css`
      ${props.style}
    `}
`;

const Icon = styled.img`
  position: absolute;
  top: 13px;
  left: 12px;
  width: 15px;
  height: 16px;
`;

const Show = styled.div`
  position: absolute;
  top: 50%;
  right: 11px;
  transform: translateY(-50%);
  font-size: 12px;
  cursor: pointer;
`;

class AuthInputPassword extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.shape(PropTypes.any),
  };

  static defaultProps = {
    name: 'password',
    placeholder: 'Password',
    style: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      type: 'password',
    };
  }

  render() {
    const { name, placeholder, style } = this.props;
    const { type } = this.state;

    return (
      <Container style={style}>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          inputStyle={{
            paddingLeft: '40px',
          }}
        />

        <Icon src={LockSrc} />

        <Show
          onClick={() => {
            this.setState({ type: type === 'password' ? 'text' : 'password' });
          }}
        >
          Show
        </Show>
      </Container>
    );
  }
}

export default AuthInputPassword;
