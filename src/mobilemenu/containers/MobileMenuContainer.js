import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import { showMobileMenu, hideMobileMenu } from '..';
import MobileMenu from '../organisms/MobileMenu';

const MobileMenuContainer = ({ showMenu, hideMobileMenuAction }) => {
  if (!showMenu) return <div />;

  return (
    <Sidebar
      sidebar={<MobileMenu closeAction={hideMobileMenuAction} />}
      open={showMenu}
      onSetOpen={hideMobileMenuAction}
      styles={{
        overlay: {
          top: '45px',
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: '2',
        },
        sidebar: {
          top: '45px',
          width: '100%',
          // maxWidth: '435px',
          zIndex: '3',
        },
      }}
    />
  );
};

MobileMenuContainer.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  hideMobileMenuAction: PropTypes.func.isRequired,
};

const mstp = state => ({
  showMenu: state.sidebar.showMenu,
});

const mdtp = {
  showMobileMenuAction: showMobileMenu,
  hideMobileMenuAction: hideMobileMenu,
};

export default connect(
  mstp,
  mdtp,
)(MobileMenuContainer);
