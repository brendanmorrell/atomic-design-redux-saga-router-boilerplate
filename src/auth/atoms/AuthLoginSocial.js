import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import AuthFbSrc from '../../assets/auth-fb.svg';
import AuthGoogleSrc from '../../assets/auth-google.svg';

const Social = styled.div`
  height: 30px;
  margin-top: 25px;
  cursor: pointer;

  span {
    position: relative;
    top: -10px;
    left: 14px;
    font-weight: 500;
    font-size: 14px;
    color: #000;
  }
`;

const AuthLoginSocial = ({ media, type }) => (
    <Social>
      <img 
        src={media === 'fb' ? AuthFbSrc : AuthGoogleSrc} 
        alt={media === 'fb' ? 'Facebook' : 'Google'} />

      <span>
        Sign {type === 'signin' ? 'in' : 'up'} with {media === 'fb' ? 'Facebook' : 'Google'}
      </span>

    </Social>
);

AuthLoginSocial.propTypes = {
  media: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default AuthLoginSocial;
