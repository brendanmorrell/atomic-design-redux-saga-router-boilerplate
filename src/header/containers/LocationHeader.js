import React from 'react'
import styled, { keyframes } from 'styled-components'
import { breakpoint } from '../../theme/Mixins';
import { connect } from 'react-redux';

import SelectedState from '../molecules/SelectedState';
import SelectedStore from '../molecules/SelectedStore';
import YourLocation from '../molecules/YourLocation';
import SelectLocationButton from '../atoms/SelectLocationButton';
import { close } from '..';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 45px;
  background-color: #fafafa;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 45px;
  line-height: 45px;
  transition: all .25s;
`;

const Wrapper = styled.div`
  float: right;
  transition: all .2s;

  ${breakpoint.down('m')`
    float: left;
  `}
`;

const Overlay = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 45px);
  z-index: 1999;
  background-color: #000;
  opacity: .45;
  display: inline-block;
  visibility: ${props => props.visible ? 'visible' : 'hidden' };
  animation: ${props => props.visible ? fadeIn(.45) : fadeOut(.45)} .1s linear;
  transition: visibility .1s linear;  
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

const LocationHeader = ({ activeMenu, closeAction }) => {
  return (
    <>
    <Container>
      <Content>
        <Wrapper>

        <YourLocation />
        <SelectedState />
        <SelectedStore />
        
        </Wrapper>
      </Content>
    </Container>

    <Overlay 
      visible={activeMenu !== null}
      onClick={closeAction} />
    </>  
  )
}

const mstp = state => ({ 
  activeMenu: state.header.activeMenu 
})

const mdtp = {
  closeAction: close,
};

export default connect(mstp, mdtp)(LocationHeader);
