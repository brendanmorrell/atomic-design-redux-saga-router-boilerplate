import React from 'react';
import styled from 'styled-components'
import { reduxForm, Form } from 'redux-form';
import { connect } from 'react-redux';

import { hideDetails } from '../../sidebar/';

import SidebarTitle from '../../storybook/atoms/SidebarTitle';
import SidebarText from '../../storybook/atoms/SidebarText';
import AuthInputEmail from '../atoms/AuthInputEmail';
import Button from '../../storybook/atoms/Button';

const Container = styled.div`
  padding-top: 5px;
`;

class AuthSidebarSignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: false,
    };
  }

  render() {
    const { completed } = this.state;
    const { valid, hideDetailsAction, } = this.props;

    return (
      <Container>
        
        <SidebarTitle
          text={(completed ? 'Please Check Your Email' : 'Forgot Password?')}
        />

        <SidebarText
          text={(completed ? 'If this email address is associated with a member account, we’ll email you instructions for resetting your password.' : 'No problem! Just enter your email address and we’ll send you a link to reset your password.')}
        />
    
        { !completed &&
          <Form>
            <AuthInputEmail />
          </Form>
        }
    
        { completed ?
          <Button 
            style={{marginTop:'20px'}}
            onClick={hideDetailsAction}>
            
            Close
          </Button>
        
        :
          <Button 
            style={{marginTop:'20px'}}
            disabled={!valid}
            onClick={() => {
              this.setState({ completed: true });
            }}>
            
            Reset Password
          </Button>
        }
      </Container>
    );
  }
}

const validate = values => {
  const error = {};
  const requiredFields = [
    'email',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) error[field] = 'Required';
  });

  return error;
};

const mdtp = {
  hideDetailsAction: hideDetails,
};

export default connect(null, mdtp)(reduxForm({
  form: 'signin',
  validate,
})(AuthSidebarSignIn));
