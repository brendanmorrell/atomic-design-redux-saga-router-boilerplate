import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { history } from '../../store';
import $ from 'jquery';
import uuid from 'uuid';

import { hideMobileMenu } from '..';

import MobileMenuLink from './MobileMenuLink';

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
  border-bottom: 1px solid #fff;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #efefef;

  &:hover {
    color: #a20000;
    background-color: #f9f9f9;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
`;

const SubNav = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.1s;
`;

const Wrapper = styled.div`
  color: auto;
`;

class MobileMenuSubNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      id: uuid(),
    };
  }

  render() {
    const { nav, hideMobileMenuAction } = this.props;
    const { id, open } = this.state;

    return (
      <>
        <Container
          onClick={() => {
            if (nav.path) {
              history.push(`/${nav.path}`);
              hideMobileMenuAction();
            } else {
              $(`#main${id}`).css({
                height: open ? 0 : $(`#wrapper${id}`).innerHeight(),
              });

              this.setState({ open: !open });
            }
          }}
        >
          {nav.label}
          <Icon>{open ? '-' : '+'}</Icon>
        </Container>

        <SubNav id={`main${id}`}>
          <Wrapper id={`wrapper${id}`}>
            {nav.subNav.map((x, i) => {
              return (
                <MobileMenuLink nav={x} key={`mobile-menu-sub${i}${id}`} />
              );
            })}
          </Wrapper>
        </SubNav>
      </>
    );
  }
}

const mdtp = {
  hideMobileMenuAction: hideMobileMenu,
};

export default connect(
  null,
  mdtp,
)(MobileMenuSubNav);
