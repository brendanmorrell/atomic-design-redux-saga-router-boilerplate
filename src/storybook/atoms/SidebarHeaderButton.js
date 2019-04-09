import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Content = styled.div`
  height: 25px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: ${props => props.active ? '2px solid #A20000' : '' };
  color: #000;
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
`;

const SidebarHeaderButton = ({ label, page, activePage, action, }) => (
  <Content 
    active={page === activePage}
    onClick={() => {
      if (action)
        action();
    }}>
    {label}
  </Content>
);

SidebarHeaderButton.propTypes = {
  label: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,  
  activePage: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  setDataAction: PropTypes.func.isRequired,
};

// SidebarHeaderButton.defaultProps = {
//   action: null,
// };

export default SidebarHeaderButton;
