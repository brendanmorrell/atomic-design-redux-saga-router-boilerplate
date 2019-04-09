import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { breakpoint } from '../../theme/Mixins';
import { connect } from 'react-redux';

const Menu = styled.div`
  position: absolute;
  top: 45px;
  padding: 10px 20px;
  z-index: 2000;
  max-width: 440px;
  border-top: 2px solid #960709;  
  box-sizing: border-box;
  background-color: #fff;
  opacity: 1;
  visibility: ${props => props.visible ? 'visible' : 'hidden' };
  animation: ${props => props.visible ? fadeIn(1) : fadeOut(1)} .1s linear;
  transition: visibility .1s linear;

  ${props => props.type === 'location' && css`
    width: 400px;
    right: 120px;
    padding: 10px 30px;
  
    ${breakpoint.down('m')`
      left: 0px;
    `}
  `}

  ${props => props.type === 'state' && css`
    ${breakpoint.down('m')`
      left: 56px;
    `}
  
    ${breakpoint.up('l')`
      right: 231px;
    `}
  `}

  ${props => props.type === 'store' && css`
    right: 0;
    min-width: 225px;

    ${breakpoint.down('m')`
      width: 440px;
    `}    
  `}
`;

const fadeIn = (val) => keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: ${val};
  }
`;

const fadeOut = (val) => keyframes`
  from {
    opacity: ${val};
  }

  to {
    opacity: 0;
  }
`;

const SelectLocationMenu = ({ activeMenu, type, children, }) => {

  return (
    <Menu visible={type === activeMenu} type={type}>
      {children}
    </Menu>
  );
}

const mstp = state => ({
  activeMenu: state.header.activeMenu,
});

export default connect(mstp, null)(SelectLocationMenu);