import React from 'react'
import styled from 'styled-components'

import SelectLocation from './LocationHeader';
import NavigationHeader from './NavigationHeader';

const Container = styled.div`
  position: fixed;
  z-index: 3000;
`;

const Header = () => {
  return (
    <Container>
      <SelectLocation />
      <NavigationHeader />
    </Container>
  )
}

export default Header;
