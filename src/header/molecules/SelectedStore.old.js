import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import Button from '../../storybook/atoms/Button';

const Details = styled.div`
    border-bottom: 1px solid #d8d8d8;
    margin: 0 0 0 -20px;
    padding: 0 0 10px 20px;
    width: calc(100% + 20px);
    color: #960709;
    font-size: 13px;
    font-weight: 500;
    height: 40px;
    cursor: pointer;    
`;

const Store = styled.div`
  font-size: 13px;
  font-weight: 500;
  height: 40px;
  cursor: pointer;
`;

const SelectedStore = ({ stores }) => {
  return (
    <div>
      <Details>
        See Selected Store Details
      </Details>

      { stores.map(x => 
        <Store
          key={`store-dd-${x.name}`}>
          
          {x.name}
        </Store>  
      )}

      <Button>View All Stores</Button>
    </div>
  )
}

const mstp = state => ({
  stores: state.constants.selectLocation.stores,
});

export default connect(mstp, null)(SelectedStore);