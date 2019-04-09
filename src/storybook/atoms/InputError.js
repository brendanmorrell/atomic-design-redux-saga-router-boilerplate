import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components'

import ErrorSrc from '../../assets/icons/input-error.svg';

const Container = styled.div`
  margin-top: 5px;
  color: #A20000;
  font-size: 11px;

  img {
    margin-right: 5px;
  }
`;

const InputError = ({
  error, 
}) => {

  return (
    <Container>
      <img src={ErrorSrc} alt={error} />
      {error}
    </Container>
  )
};

InputError.propTypes = {
  error: PropTypes.string,
};

InputError.defaultProps = {
  error: null,
};

export default InputError;