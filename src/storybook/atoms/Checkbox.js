import React from 'react';
import { object, PropTypes } from 'prop-types';
import { Field, formValueSelector, change } from 'redux-form';
import styled, { css } from 'styled-components'
import { connect } from 'react-redux';
import uuid from 'uuid';

const Container = styled.div`

  ${props => props.style && css`
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
  border: 1px solid #AAAAAA;
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
`;

const Checked = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  background-color: #A20000;
`;

const Label = styled.div`
  width: calc(100% - 35px);
  display: inline-block;
  font-size: 11px;
  margin-left: 10px;
  user-select: none;
  cursor: pointer;
`;

const Checkbox = ({
  input: { value, onChange, name, ...input },
  meta: { touched, error, },

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
      id={id} 
      style={style} 
      onClick={() => {
        if (!disabled)
          changeAction(name, !checked, formName);
      }}
    >

      <input 
        type='checkbox' 
        name={name} 
        onChange={onChange} />

      <Box>
        { checked &&
          <Checked />
        }
      </Box>
      
      { label &&
        <Label>{label}</Label>
      }

      { /*{touched && error && <span>{error}</span>} */ }
    </Container>
  )
};

Checkbox.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,  
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  id: uuid(),
  disabled: false,
  label: null,
};

const mstp = (state, ownProps) => ({
  checked: formValueSelector(ownProps.formName)(state, ownProps.name),
});

const mdtp = dispatch => ({
  changeAction: (field, value, formName) => dispatch(change(formName, field, value)),
});

export default connect(mstp, mdtp)(props => <Field {...props} component={Checkbox} />);