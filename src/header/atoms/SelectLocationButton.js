import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoint } from '../../theme/Mixins';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { open, close } from '../';

const Container = styled.div`
  position: relative;
  vertical-align: top;
  min-height: 45px;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 30px 0 20px;
  border-right: 1px solid #efefef;
  cursor: pointer;
  border-left: ${props => (props.borderLeft ? '1px solid #efefef' : '')};
  ${props =>
    props.type === 'store' &&
    css`
      width: 229px;
    `}
  ${breakpoint.down('m')`
    padding-left: 10px;
  `}
`;

const Header = styled.div`
  margin-top: 7px;
  height: 14px;
  font-size: 11px;
  color: #858585;
  font-weight: 400;
  padding-bottom: 2px;
  line-height: 14px;
  ${breakpoint.down('m')`
    margin-top: 0px;
    height: 45px;
    font-weight: 600;
    line-height: 45px;
    display: inline-block;
    margin-right: 7px;
  `}
`;

const Label = styled.div`
  height: 14px;
  font-size: 12px;
  color: #960709;
  font-weight: 600;
  position: relative;
  line-height: 14px;
  ${breakpoint.down('m')`
    line-height: 45px;
    display: inline-block;
  `}
`;

const Arrow = styled.div`
  position: absolute;
  top: 27px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #585858;
  ${breakpoint.down('m')`
    top: 22px;
  `}
`;

const Desktop = styled.div`
  display: inline-block;
  ${breakpoint.down('m')`
    display: none;
  `}
`;

const Mobile = styled.div`
  display: inline-block;
  ${breakpoint.up('l')`
    display: none;
  `}
`;

const SelectLocationButton = ({
  header,
  label,
  borderLeft,
  activeMenu,
  openAction,
  closeAction,
  type,
  mobileHeader,
  mobileLabel,
}) => {
  return (
    <>
      <Container
        borderLeft={borderLeft}
        type={type}
        onClick={() => {
          if (activeMenu !== type) openAction(type);
          else closeAction();
        }}
      >
        <Mobile>
          {mobileHeader && <Header>{mobileHeader}</Header>}
          <Label>{mobileLabel}</Label>
        </Mobile>

        <Desktop>
          <Header>{header}</Header>
          <Label>{label}</Label>
        </Desktop>
        <Arrow />
      </Container>
    </>
  );
};

SelectLocationButton.propTypes = {
  header: PropTypes.string,
  label: PropTypes.string,
  borderLeft: PropTypes.bool,
  mobileHeader: PropTypes.string,
  mobileLabel: PropTypes.string,
};

SelectLocationButton.defaultProps = {
  header: '',
  label: '',
  borderLeft: false,
  mobileHeader: null,
  mobileLabel: null,
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
)(SelectLocationButton);
