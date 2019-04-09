import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../theme/Mixins';
import { connect } from 'react-redux';

import { navigate } from '../../sidebar';
import { showMobileMenu } from '../../mobilemenu';
import { history } from '../../store';

import LogoSrc from '../../assets/logo.png';
import MobileMenuSrc from '../../assets/icons/mobile-menu.svg';

import NavigationBar from '../molecules/NavigationBar';
import AuthSidebar from '../../auth/containers/AuthSidebar';
import ProfileSidebar from '../../profile/containers/ProfileSidebar';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 75px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 75px;
  transition: all 0.25s;
`;

const Logo = styled.img`
  position: absolute;
  width: 175px;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s;
  ${breakpoint.down('m')`
    left: 20px;
  `}
`;

const Auth = styled.div`
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 50%;
  right: 190px;
  transform: translateY(-50%);
  cursor: pointer;
  display: none;
  ${breakpoint.down('m')`
    display: inline;
  `}
`;

const NavigationHeaderContainer = ({
  navigateAction,
  showMobileMenuAction,
}) => {
  return (
    <>
      <Container>
        <Content>
          <Logo
            data-testid={'/'}
            src={LogoSrc}
            onClick={() => {
              history.push('/');
            }}
          />

          <NavigationBar />

          <Auth
            onClick={() => {
              navigateAction({
                component: <AuthSidebar />,
              });
            }}
          >
            Sign Up
          </Auth>

          <Auth
            style={{ right: 120 }}
            onClick={() => {
              navigateAction({
                component: <ProfileSidebar />,
              });
            }}
          >
            Profile
          </Auth>

          <MobileMenu onClick={showMobileMenuAction}>
            <img src={MobileMenuSrc} alt="Menu" />
          </MobileMenu>
        </Content>
      </Container>
    </>
  );
};

const mdtp = {
  navigateAction: navigate,
  showMobileMenuAction: showMobileMenu,
};

export default connect(
  null,
  mdtp,
)(NavigationHeaderContainer);
