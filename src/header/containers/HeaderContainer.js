import React from 'react';
import styled from 'styled-components';

import SelectLocationContainer from './SelectLocationContainer';
import NavigationHeaderContainer from './NavigationHeaderContainer';

const Container = styled.div`
  position: fixed;
`;

const HeaderContainer = () => {
  return (
    <Container>
      <SelectLocationContainer />
      <NavigationHeaderContainer />
    </Container>
  );
};

export default HeaderContainer;
