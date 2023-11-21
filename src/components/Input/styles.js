import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  padding: 1.6rem 1.7rem;
  margin-bottom: 0.8rem;

  > svg {
    margin-right: 1.6rem;
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
  
  input {
    width: 100%;
    min-width: ${props => `${props.placeholder.length}ch`};
    background: transparent;
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none; 
 
 
    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }`