import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
  /* background-color: ${props => (props.disabled ? '#aaa' : '#960709')}; */
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  border: 0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.25s;
  letter-spacing: 1.4px;
  font-family: 'Avenir Next', sans-serif !important;
  background-color: ${props =>
    props.disabled
      ? props.theme.colors['cancel']
      : props.theme.colors[props.color]};
  ${props => props.style};
`;

const Button = ({ children, disabled, style, onClick, className, color }) => {
  return (
    <Container
      disabled={disabled}
      style={style}
      onClick={onClick}
      className={className}
      color={color}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  // style: PropTypes.shape(PropTypes.any),
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  children: null,
  disabled: false,
  onClick: () => {},
  className: '',
  color: 'primary',
};

export default Button;
