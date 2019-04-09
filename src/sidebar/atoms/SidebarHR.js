import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 24px;
  color: #000;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;

  ${props => props.style};
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1px;
  background-color: #DDD;
  z-index: 1;
`;

const Label = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 0 10px;
  font-size: 16px;
`;

const SidebarHR = ({ label, style, }) => {
  return (
      <Container style={style}>
        <Line />
        { label &&
          <Label>{label}</Label>
        }
      </Container>
  )
}

SidebarHR.propTypes = {
  label: PropTypes.string,
  style: PropTypes.shape(PropTypes.any),
};

SidebarHR.defaultProps = {
  label: null,
  style: {},
};

export default SidebarHR;