import React from 'react';
import PropTypes from 'prop-types';

const LoginPage = ({ logInAction }) => (
  <button onClick={logInAction}>Login</button>
);

LoginPage.propTypes = {
  logInAction: PropTypes.func.isRequired,
};

export default LoginPage;
