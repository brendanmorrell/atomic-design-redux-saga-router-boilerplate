import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;

  ${props => props.style && css`
    ${props.style}
  `}   

  input {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    font-family: 'Avenir Next', sans-serif!important;
    font-size: 12px;
    color: #585858;
    padding-left: ${props => props.icon ? '40px' : '10px' };
    font-weight: 500;
    letter-spacing: 1.1px;
    box-sizing: border-box;
    transition: all .3s;

    &:disabled {
      background-color: #EFEFEF;
    }

    &:focus {
      border-color: #A20000;
    }

    ${props => props.inputStyle && css`
      ${props.inputStyle}
    `}

    ${props => props.color && props.color === 'white' && css`
      background-color: #fff;
    `}
  }
`;
