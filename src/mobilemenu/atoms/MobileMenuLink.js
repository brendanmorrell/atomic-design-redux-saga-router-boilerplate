import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { history } from '../../store';

import AngleSrc from '../../assets/icons/mobile-menu-angle.svg';
import { hideMobileMenu } from '..';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: block;
  color: #000;
  line-height: 60px;
  font-size: 15px;
  font-weight: 600;
  padding-left: 40px;
  border-bottom: 1px solid #efefef;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    color: #a20000;
    background-color: #f9f9f9;
  }
`;

const Angle = styled.img`
  position: absolute;
  right: 10px;
  top: 25px;
`;

const MobileMenuLink = ({ sub, nav, hideMobileMenuAction }) => (
  <Container
    onClick={() => {
      if (nav.path) {
        history.push(`/${nav.path}`);
        hideMobileMenuAction();
      }
    }}
  >
    {nav.label}

    {nav.page && <Angle src={AngleSrc} alt="Next Page" />}
  </Container>
);

const mdtp = {
  hideMobileMenuAction: hideMobileMenu,
};

export default connect(
  null,
  mdtp,
)(MobileMenuLink);
