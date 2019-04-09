import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoint } from '../../theme/Mixins';
import { connect } from 'react-redux';
import $ from 'jquery';
import uuid from 'uuid';

const Menu = styled.div`
  position: absolute;
  top: 45px;
  padding: 10px 20px;
  z-index: 2000;
  max-width: 440px;
  border-top: 2px solid #960709;
  box-sizing: border-box;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s linear;
  ${props =>
    props.type === 'location' &&
    css`
      width: 400px;
      right: 120px;
      padding: 10px 30px;

      ${breakpoint.down('m')`
      left: 0px;
    `}
    `}

  ${props =>
    props.type === 'state' &&
    css`
      ${breakpoint.down('m')`
      left: 56px;
    `}

      ${breakpoint.up('l')`
      right: 231px;
    `}
    `}

  ${props =>
    props.type === 'store' &&
    css`
      right: 0;
      min-width: 225px;

      ${breakpoint.down('m')`
      width: 440px;
    `}
    `}
`;

class SelectLocationMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuid(),
      visible: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.activeMenu === nextProps.type) {
      $(`#${prevState.id}`).css({ visibility: 'visible' });
      setTimeout(() => {
        $(`#${prevState.id}`).css({ opacity: 1 });
      }, 10);
    } else {
      $(`#${prevState.id}`).css({ opacity: 0 });

      setTimeout(() => {
        $(`#${prevState.id}`).css({ visibility: 'hidden' });
      }, 210);
    }

    return null;
  }

  render() {
    const { type, children } = this.props;
    const { id } = this.state;

    return (
      <Menu type={type} id={id}>
        {children}
      </Menu>
    );
  }
}

const mstp = state => ({
  activeMenu: state.header.activeMenu,
});

export default connect(
  mstp,
  null,
)(SelectLocationMenu);
