import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  color: #94070a;
  font-size: 17px;
  text-align: center;
  font-weight: 600;
  margin-top: 30px;
`;

const SidebarTitle = ({ text }) => <Container>{text}</Container>;

SidebarTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SidebarTitle;
