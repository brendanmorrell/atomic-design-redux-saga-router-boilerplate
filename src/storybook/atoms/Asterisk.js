import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 10px;
  margin: -6px 0 10px 4px;
  color: #858585;

  div {
    display: inline-block;
  }
`;

const Asterisk = ({ content }) => {
  return (
    <Container>
      * <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

Asterisk.propTypes = {
  content: PropTypes.node,
};

Asterisk.defaultProps = {
  content: '',
};

export default Asterisk;
