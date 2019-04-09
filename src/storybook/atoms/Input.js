import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import uuid from 'uuid';

import { Container } from './Form.style.js';

import InputError from './InputError';

const Input = ({
  input: { value, onChange, name, ...input },
  meta: { touched, error },

  id,
  style,
  disabled,
  inputStyle,
  type,
  color,
  placeholder,
}) => {
  return (
    <Container id={id} style={style} inputStyle={inputStyle} color={color}>
      <input
        type={type}
        name={name}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />

      {touched && error && <InputError error={error} />}
    </Container>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  id: uuid(),
  disabled: false,
  label: null,
};

export default props => <Field {...props} component={Input} />;
