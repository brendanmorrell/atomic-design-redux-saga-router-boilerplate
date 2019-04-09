import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { change, formValueSelector, } from 'redux-form';

import InfoSrc from '../../assets/icons/auth-info.svg';

import Checkbox from '../../storybook/atoms/Checkbox';


const Container = styled.div`
  position: relative;
  padding: 12px;
  width: 100%;
  border: 1px dotted #A20000;
  color: #A20000;
  margin-top: 25px;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Check = styled.div`
  vertical-align: top;
  display: inline-block;
`;

const Info = styled.div`
  width: calc(100% - 50px);
  display: inline-block;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  user-select: none;

  img {
    margin-left: 7px;
  }
`;

const ProfileRewardsProgram = ({ changeAction, checked, formName, }) => (
  <Container>
    <Check>
      <Checkbox
        name='rewards'
        formName={formName}
        style={{
          display: 'inline-block'
        }} />
    </Check>
    <Info onClick={() => {
      changeAction('rewards', !checked, formName)
    }}>
      Join Our Free Rewards Program and Start Earning Points Today!
      <img src={InfoSrc} alt='Info' />
    </Info>
  </Container>
);

const mstp = (state, ownProps) => ({
  checked: formValueSelector(ownProps.formName)(state, 'rewards'),
});

const mdtp = dispatch => ({
  changeAction: (field, value, formName) => dispatch(change(formName, field, value)),
});

export default connect(mstp, mdtp)(ProfileRewardsProgram);
