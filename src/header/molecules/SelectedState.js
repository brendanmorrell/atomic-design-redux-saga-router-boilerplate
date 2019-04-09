import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components'

import SelectLocationButton from '../atoms/SelectLocationButton';
import SelectLocationMenu from './SelectLocationMenu';

const State = styled.div`
  min-width: 82px;
  font-size: 13px;
  font-weight: 500;
  height: 40px;
  cursor: pointer;
  transition: all .1s;

  &:hover {
    color: #960709;
  }
`;

const SelectedState = ({ states }) => {

  return (
    <>
      <SelectLocationButton
        header='Selected State'
        label='No Store'
        type='state'
        mobileLabel='NV'
      /> 

      <SelectLocationMenu type='state'>
        { states.map(x => 
          <State key={`state-dd-${x.name}`}>{x.name}</State>  
        )}
      </SelectLocationMenu>
    </>
  );
}

SelectedState.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mstp = state => ({ 
  states: state.constants.selectLocation.states 
});

export default connect(mstp, null)(SelectedState);
