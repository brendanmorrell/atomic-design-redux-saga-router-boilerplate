import React from 'react'
import styled from 'styled-components'
import { reduxForm, Form } from 'redux-form';

import { history } from '../../store';

import AuthInputPassword from '../atoms/AuthInputPassword';
import Button from '../../storybook/atoms/Button';
import Asterisk from '../../storybook/atoms/Asterisk';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 0 auto 0 auto;
  padding-top: 175px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #222222;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #585858;
  text-align: center;
  margin-bottom: 40px;
`;

const StyledForm = styled(Form)`
  width: calc(100% - 40px);
  max-width: 383px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: calc(100% - 40px);
  max-width: 383px;
  margin: 0 auto;
`;

class AuthUpdatePassword extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: false,
    };
  }

  render() {
    const { completed } = this.state;

    return (
      <Container>
        <Title>
          { completed ?
            'Success!'
          :
            'Update Your Password'
          }
        </Title>
        <Subtitle>
          { completed ?
            'Your new password was updated and is ready to use.'
          :
            'Your password may not be the same password as previously used.'
          }
        </Subtitle>

        { !completed &&
          <StyledForm>
            <AuthInputPassword
              placeholder='New Password' />

            <Asterisk 
              content='Must be 8 or more characters' />

            <AuthInputPassword
              placeholder='Confirm New Password'
              name='password2'
              style={{ marginBottom: '25px' }} />

            <Button
              onClick={() => {
                this.setState({ completed: true });
              }}>

              Update
            </Button>
          </StyledForm>
        }

        { completed &&
          <Wrapper>
            <Button
              onClick={() => { history.push('/') }}>

              Go to Homepage
            </Button>
          </Wrapper>   
        }
      </Container>
    );
  }
}

const validate = values => {
  const error = {};
  const requiredFields = [
    'password',
    'password2',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) error[field] = 'Required';
  });

  return error;
};

export default 
  reduxForm({
    form: 'updatepassword',
    validate,
  })(AuthUpdatePassword);
