import React from 'react';
import styled from 'styled-components'

import Radio from '../../storybook/atoms/Radio';

const Header = styled.div`
  font-weight: 600;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 5px;
`;

const Container = styled.div`
  width: 100%;
  background-color: #FAFAFA;
  border: 1px solid #EEEEEE;
  border-radius: 5px;
  padding: 18px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 287px;
  margin: 0 auto;
`;

const SidebarUpGender = ({ formName }) => {
  
  return (
    <div>
      <Header>
        Optional (Gender)
      </Header>

      <Container>
        <Wrapper>
          <Radio 
            name='gender'
            id='female'
            label='Female'
            formName={formName}
          />
          
          <Radio 
            name='gender'
            id='male'
            label='Male'
            formName={formName}
            style={{
              margin: '0 20px'
            }}
          />
          
          <Radio 
            name='gender'
            id='nonbinary'
            label='Nonbinafy'
            formName={formName}
          />
        </Wrapper>
      </Container>
    </div>
  )
};

export default SidebarUpGender;
