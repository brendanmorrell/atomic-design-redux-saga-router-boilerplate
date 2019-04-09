import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../theme/Mixins';
import { connect } from 'react-redux';

import { open, close } from '../';

import TargetSrc from '../../assets/target-address.svg';
import SelectLocationButton from '../atoms/SelectLocationButton';
import SelectLocationMenu from './SelectLocationMenu';

import ArrowSrc from '../../assets/arrow-up-red.svg';
import CloseSrc from '../../assets/close-blk.svg';
import Button from '../../storybook/atoms/Button';

const Mobile = styled.div`
  position: relative;
  width: 55px;
  height: 45px;
  display: inline-block;
  cursor: pointer;
  border-right: 1px solid #efefef;
  vertical-align: top;
  ${breakpoint.up('l')`
    display: none;
  `}

  img {
    position: relative;
    top: 8px;
    left: 16px;
  }
`;

const Desktop = styled.div`
  display: inline-block;
  ${breakpoint.down('m')`
    display: none;
  `}
`;

const Container = styled.div`
  h1 {
    font-size: 20px;
    color: #960709;
    margin: 0;
    line-height: 1.52941;
    font-weight: 600;
    ${breakpoint.down('m')`
      display: none;
    `}
  }

  h2 {
    font-size: 13px;
    line-height: 19px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    ${breakpoint.down('m')`
      margin-top: 10px;
    `}
  }
`;

const Arrow = styled.img`
  position: relative;
  width: 20px;
  height: 25px;
  left: 90px;
  ${breakpoint.down('m')`
    display: none;
  `}
`;

const Close = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 14px;
  height: 14px;
  cursor: pointer;
  ${breakpoint.down('m')`
    display: none;
  `}
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
    transition: all 0.25s;
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

const YourLocation = ({ activeMenu, closeAction, openAction }) => {
  return (
    <>
      <Mobile
        onClick={() => {
          if (activeMenu !== 'location') openAction('location');
          else closeAction();
        }}
      >
        <img src={TargetSrc} alt="Select Location" />
      </Mobile>

      <Desktop>
        <SelectLocationButton
          header="Your locations"
          label="No Locations"
          type="location"
          borderLeft
        />
      </Desktop>

      <SelectLocationMenu type="location">
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
              width: '152px',
            }}
          >
            Update
          </Button>
        </Container>
      </SelectLocationMenu>
    </>
  );
};

const mstp = state => ({
  activeMenu: state.header.activeMenu,
});

const mdtp = {
  openAction: open,
  closeAction: close,
};

export default connect(
  mstp,
  mdtp,
)(YourLocation);
