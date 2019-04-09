import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SubnavSection from './subnavSection';
import AdminSidebar from '../../admin/organisms/adminSidebar';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubnavLink = styled(Link)`
  width: 100%;
  height: 40px;
  padding-left: 39px;
  line-height: 40px;
  background-color: white;
  border-bottom: 1px solid ${props => props.theme.colors.mediumgray};
  color: black;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: ${props => props.theme.colors.lightgray};
  }
`;

const SubnavButton = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 39px;
  line-height: 40px;
  background-color: white;
  border-bottom: 1px solid ${props => props.theme.colors.mediumgray};
  color: black;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: ${props => props.theme.colors.lightgray};
  }
`;

const MobileMenuSubnav = ({
  permissions = {},
  viewMyInfo,
  closeAction,
  stage,
  featureFlags,
}) => {
  // TODO: refactor into a helper
  const isPermitted = term => stage === 'local' || permissions.includes(term);

  return (
    <Menu>
      <SubnavSection title="store">
        <SubnavLink to="/queue" onClick={closeAction}>
          Customer Queue
        </SubnavLink>
        {featureFlags.doctorDirectory && (
          <SubnavLink to="/doctor" onClick={closeAction}>
            Doctor Directory
          </SubnavLink>
        )}

        {isPermitted('STORE DASHBOARD') && (
          <SubnavLink to="/dashboard" onClick={closeAction}>
            Store Dashboard
          </SubnavLink>
        )}

        {isPermitted('STORE REPORT') && (
          <SubnavLink to="/reports" onClick={closeAction}>
            Store Reports
          </SubnavLink>
        )}

        {isPermitted('POS') && (
          <Fragment>
            <SubnavLink to="/menu" onClick={closeAction}>
              Menu Settings
            </SubnavLink>
          </Fragment>
        )}
        {isPermitted('STORE REPORT') && (stage === 'dev' || stage === 'local') && (
          <SubnavLink to="/analytics" onClick={closeAction}>
            Analytics
          </SubnavLink>
        )}
      </SubnavSection>

      {isPermitted('STORE INVENTORY') && (
        <SubnavSection title="inventory">
          <SubnavLink to="/inventory" onClick={closeAction}>
            Store Inventory
          </SubnavLink>
        </SubnavSection>
      )}

      <SubnavSection title="admin">
        <SubnavButton
          onClick={() => {
            viewMyInfo({
              component: <AdminSidebar />,
            });
            closeAction();
          }}
        >
          My Info
        </SubnavButton>
        {(stage === 'dev' || stage === 'local' || stage === 'test') && (
          <>
            <SubnavLink to="/dev-tools" onClick={closeAction}>
              Dev Tools
            </SubnavLink>
            {stage !== 'test' && (
              <SubnavLink to="/sandbox" onClick={closeAction}>
                Sandbox
              </SubnavLink>
            )}
          </>
        )}
      </SubnavSection>
    </Menu>
  );
};

// export const hamburgerSubnavPropTypes = {
//   permissions: PropTypes.arrayOf(PropTypes.string),
//   stage: PropTypes.string.isRequired,
//   viewMyInfo: PropTypes.func,
//   closeAction: PropTypes.func,
//   featureFlags: PropTypes.shape({}).isRequired,
// };

// HamburgerSubnav.propTypes = hamburgerSubnavPropTypes;

// HamburgerSubnav.defaultProps = {
//   permissions: {},
//   closeAction: () => {},
//   viewMyInfo: () => {},
// };

const mstp = state => ({
  featureFlags: state.devTools.featureFlags,
  stage: state.config.stage,
});

export default connect(
  mstp,
  null,
)(MobileMenuSubnav);
