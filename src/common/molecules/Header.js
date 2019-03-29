import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import staticSites from '../../constants/staticSites'
import NavLink from '../atoms/NavLink'
import PotLeafWithMM from '../../assets/icons/pot-leaf-with-MM.svg'

const Wrapper = styled.span`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 8rem;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: flex-end;
`

const NavBarWrapper = styled.span`
  display: flex;
  align-items: flex-end;
  padding: 0.8rem 2rem;
`

const links = staticSites.filter(({ path }) => path !== 'home')
const HomeLink = styled(Link)`
  margin-right: 35px;
`
const LinkWrapper = styled.div`
  padding-bottom: 5px;
  cursor: pointer;
`
const Header = () => (
  <Wrapper>
    <NavBarWrapper>
      <HomeLink to="home" key="home">
        <img src={PotLeafWithMM} alt="MM" height="40px" />
      </HomeLink>
      {links.map(({ path, label }) => (
        <LinkWrapper key={path}>
          <NavLink path={path} label={label} />
        </LinkWrapper>
      ))}
    </NavBarWrapper>
  </Wrapper>
)

Header.propTypes = {}

export default Header
