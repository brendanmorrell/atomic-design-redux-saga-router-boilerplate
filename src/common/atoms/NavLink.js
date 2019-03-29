import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.5px;
  float: left;
  margin-right: 30px;
  margin-top: 0;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  margin-bottom: -1rem;
  padding-bottom: 1rem;

  :hover {
    color: ${props => props.theme.colors.primary};
    border-bottom: 5px solid ${props => props.theme.colors.primary};
    padding-bottom: calc(1rem - 5px);
  }
`

const NavLink = ({ path, label }) => <StyledNavLink to={`/${path}`}>{label}</StyledNavLink>

NavLink.propTypes = {}

export default NavLink
