import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  max-height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.6rem 0;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  gap: 0.8rem;
  flex: 1 0 0;

  font-size: 1.6rem;
  font-family: inherit;

  font-weight: 500;

  border-radius: 1rem;
`