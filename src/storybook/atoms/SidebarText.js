import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Container = styled.div`
  font-size: 15px;
  text-align: center;
  font-weight: 600;
  width: 350px;
  margin: 10px auto 30px auto;
  color: #000;
  line-height: 20px;
`;

const SidebarText = ({ text }) => (
  <Container>
    {text}
  </Container>
);

SidebarText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SidebarText;