import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  background: transparent;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  border: none;
    
  position: relative;
  resize: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1.9rem 0 0 1.6rem;
  margin: 4rem 0;
    
  &::placeholder {
    position: absolute;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
      
    font-size: 1.6rem;
      
    top: 1.9rem;
    left: 1.6rem;
  }
`;
