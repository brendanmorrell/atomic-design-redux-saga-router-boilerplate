import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import { hideDetails } from '..';

const SidebarContainer = ({ showDetails, detailInfo, closeAction }) => {
  
  if (!showDetails) return null;

  return (
    <Sidebar
      sidebar={detailInfo.component || <div />}
      open={showDetails}
      onSetOpen={closeAction}
      pullRight
      sidebarId="sidebar"
      transitions={true}
      styles={{
        root: {
          position: "absolute",
          top: '121px',
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden"
        },
        overlay: {
          position: "fixed",
          top: '121px',
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          visibility: "hidden",          
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: '2',
          transition: "opacity .3s ease-out, visibility .3s ease-out",
        },
        sidebar: {
          background: detailInfo.background || '#fff',
          padding: detailInfo.padding || '0',
          width: '100%',
          maxWidth: '435px',
          zIndex: '3',
          transition: "transform .3s ease-out",
          WebkitTransition: "-webkit-transform .3s ease-out",
          willChange: "transform",
          borderTop: '2px solid #A20000',
        },
        content: {
          transition: "left .3s ease-out, right .3s ease-out"
        }
      }}
    />
  );
};

SidebarContainer.propTypes = {
  showDetails: PropTypes.bool.isRequired,
  detailInfo: PropTypes.shape({
    component: PropTypes.element,
  }).isRequired,
  closeAction: PropTypes.func.isRequired,
};

const mstp = state => ({
  detailInfo: state.sidebar.detailInfo,
  showDetails: state.sidebar.showDetails,
});

const mdtp = {
  closeAction: hideDetails,
};

export default connect(mstp, mdtp)(SidebarContainer);
