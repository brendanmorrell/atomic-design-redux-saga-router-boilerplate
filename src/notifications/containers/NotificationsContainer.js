import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toast from '../molecules/Toast';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;

const NotificationsContainer = ({ toastNotifications }) => (
  <Container>
    {toastNotifications.map(x => (
      <Toast {...x} key={x.uuid} />
    ))}
  </Container>
);

NotificationsContainer.propTypes = {
  toastNotifications: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mstp = state => ({
  toastNotifications: state.notifications.toastNotifications,
});

export default connect(
  mstp,
  null,
)(NotificationsContainer);
