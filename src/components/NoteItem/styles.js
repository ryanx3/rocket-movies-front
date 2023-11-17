import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;

  padding: 1.6rem;
  background-color: ${({ theme, $isNew }) => 
    $isNew ? theme.COLORS.BACKGROUND_700 : "transparent"};

  border-radius: 1rem;

  border: ${({ theme, $isNew }) => 
    $isNew ? theme.COLORS.BACKGROUND_700 : `0.2rem dashed ${theme.COLORS.GRAY_300}`};

  input {
    border: none;
    display: flex;
    align-items: center;
    background: transparent;
    color: ${({ theme, $isNew }) => 
      $isNew ? theme.COLORS.WHITE : theme.COLORS.GRAY_300};
  }

  button {
    border: none;
    display: flex;
    align-items: center;
    background: transparent;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 2.4rem;
    }
  }
`;
