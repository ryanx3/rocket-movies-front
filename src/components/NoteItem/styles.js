import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;

  padding: 1.6rem;
  background-color: ${({ theme  }) => theme.COLORS.BACKGROUND_700};

  border-radius: 1rem;

  border: ${({ theme  }) => theme.COLORS.BACKGROUND_700};

  input {
    border: none;
    display: flex;
    align-items: center;
    background: transparent;
    color: ${({ theme,  }) => theme.COLORS.WHITE};
    min-width: 0;
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

export const ContainerNew = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;

  padding: 1.6rem;
  background-color: transparent;

  border-radius: 1rem;

  border: 0.2rem dashed;

  input {
    border: none;
    display: flex;
    align-items: center;
    background: transparent;
    color: white; 

    &::placeholder {
      color: ${({ theme  }) => theme.COLORS.GRAY_300}; 
    }
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