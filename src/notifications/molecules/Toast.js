import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { removeToastNotification } from '..';
import CheckIcon from '../../assets/icon-check';
import WarningIcon from '../../assets/icon-warning-red.svg';

const opacity = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledIcon = styled.div`
  margin-right: 10px;
  position: relative;
  top: 5px;
`;

const StyledIconWarning = styled(StyledIcon)`
  top: 0;
`;

const Modal = styled.div`
  background-color: ${props => props.theme.colors.black};
  color: white;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  justify-content: center;
  padding: 25px;
  position: relative;
  bottom: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  animation: ${opacity} 0.1s linear forwards;
`;

class Toast extends Component {
  componentDidMount() {
    const { uuid, timer, sticky, removeNotificationAction } = this.props;

    if (!sticky)
      setTimeout(() => {
        removeNotificationAction(uuid);
      }, timer);
  }

  render() {
    const { message, type, uuid, removeNotificationAction } = this.props;

    return (
      <Modal
        onClick={() => {
          removeNotificationAction(uuid);
        }}
      >
        {type === 'success' && (
          <StyledIcon>
            <CheckIcon color="white" />
          </StyledIcon>
        )}
        {type === 'error' && (
          <StyledIconWarning>
            <img src={WarningIcon} alt="" />
          </StyledIconWarning>
        )}
        <span>{message}</span>
      </Modal>
    );
  }
}

Toast.propTypes = {
  uuid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired,
  sticky: PropTypes.bool.isRequired,
  removeNotificationAction: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  // menu: null,
};

const mdtp = {
  removeNotificationAction: removeToastNotification,
};

export default connect(
  null,
  mdtp,
)(Toast);
