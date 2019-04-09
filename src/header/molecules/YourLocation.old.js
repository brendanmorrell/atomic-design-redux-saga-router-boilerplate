import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import { close } from '../';

import ArrowSrc from '../../assets/arrow-up-red.svg';
import CloseSrc from '../../assets/close-blk.svg';
import TargetSrc from '../../assets/target-address.svg';
import Button from '../../storybook/atoms/Button';

const Container = styled.div`
  h1 {
    font-size: 20px;
    color: #960709;
    margin: 0;    
    line-height: 1.52941;
    font-weight: 600;
  }

  h2 {
    font-size: 13px;
    line-height: 19px;
    font-weight: 600;
    margin: 0;
    padding: 0;    
  }
`;

const Arrow = styled.img`
  position: relative;
  width: 20px;
  height: 25px;
  left: 90px;
`;

const Close = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

const Input = styled.div`
  position: relative;

  input {
    width: 340px;
    height: 40px;
    padding: 0 35px 0 10px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
    margin-top: 15px;
    color: #858585;
    border: 1px solid #e5e5e5;
    transition: all .25s;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
`;

const Target = styled.img`
  position: absolute;
  top: 23px;
  right: 10px;
  width: 23px;
  height: 23px;
  cursor: pointer;
`;

const YourLocation = ({ closeAction }) => {
  return (
    <Container>
      <Arrow src={ArrowSrc} />
      <Close src={CloseSrc} onClick={closeAction} />

      <h1>Personalize your experience</h1>
      <h2>For the best experience, please update your location.</h2>


      <Input>
        <input />
        <Target src={TargetSrc} />    
      </Input>
      
      
      <Button 
        disabled={true}
        style={{
          marginTop: '10px',
          width: '152px'
        }}>
        Update
      </Button>
    </Container>
  )
}

const mdtp = {
  closeAction: close,
};

export default connect(null, mdtp)(YourLocation);