import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../theme/Mixins';
import { connect } from 'react-redux';

import Button from '../../storybook/atoms/Button';
import SelectLocationButton from '../atoms/SelectLocationButton';
import SelectLocationMenu from './SelectLocationMenu';

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
  line-height: 45px;
  ${breakpoint.down('m')`
    font-size: 16px;
  `}
`;

const Store = styled.div`
  font-size: 13px;
  font-weight: 500;
  height: 40px;
  cursor: pointer;
  line-height: 45px;
  ${breakpoint.down('m')`
    font-size: 16px;
  `}
`;

const SelectedStore = ({ activeMenu, stores }) => {
  return (
    <>
      <SelectLocationButton
        header="Selected Store"
        label="No Store"
        type="store"
        mobileHeader="Store"
        mobileLabel="No Store"
      />

      <SelectLocationMenu type="store">
        <Details>See Selected Store Details</Details>

        {stores.map(x => (
          <Store key={`store-dd-${x.name}`}>{x.name}</Store>
        ))}

        <Button>View All Stores</Button>
      </SelectLocationMenu>
    </>
  );
};

const mstp = state => ({
  stores: state.constants.selectLocation.stores,
  activeMenu: state.header.activeMenu,
});

export default connect(
  mstp,
  null,
)(SelectedStore);
