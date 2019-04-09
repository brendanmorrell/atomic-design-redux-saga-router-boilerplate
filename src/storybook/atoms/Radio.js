import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, formValueSelector, change } from 'redux-form';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import uuid from 'uuid';

const Container = styled.div`
  display: inline-block;
  ${props =>
    props.style &&
    css`
      ${props.style}
    `}

  input {
    display: none;
  }
`;

const Box = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid #aaa;
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  border-radius: 50%;
`;

const Checked = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  background-color: #a20000;
  border-radius: 50%;
`;

const Label = styled.label`
  margin-left: 7px;
  cursor: pointer;
`;

const Radio = ({
  input: { value, onChange, name, ...input },
  meta: { touched, error },

  id,
  checked,
  style,
  formName,
  disabled,
  label,
  changeAction,
}) => {
  return (
    <Container
      style={style}
      onClick={() => {
        if (!disabled) changeAction(name, id, formName);
      }}
    >
      <input id={id} type="radio" name={name} value={id} onChange={onChange} />

      <input id={id} type="radio" name={name} value={id} onChange={onChange} />

      <Box>{checked === id && <Checked />}</Box>

      <Label for={id}>{label}</Label>
    </Container>
  );
};

Radio.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Radio.defaultProps = {
  id: uuid(),
  disabled: false,
  label: null,
};

const mstp = (state, ownProps) => ({
  checked: formValueSelector(ownProps.formName)(state, ownProps.name),
});

const mdtp = dispatch => ({
  changeAction: (field, value, formName) =>
    dispatch(change(formName, field, value)),
});

export default connect(
  mstp,
  mdtp,
)(props => <Field {...props} component={Radio} />);
