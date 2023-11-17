import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  color: #FFF;
  font-size: 3.2rem;
  margin: 4rem 0;
`

export const Button = styled(Link)`
  color: #1C1B1E;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  width: auto;

  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_PAGE};

  font-feature-settings: 'liga' off;
  font-size: 1.6rem;
  font-weight: 500;   

  font-style: antialiasing;
  display: inline-flex;
  padding: 1.6rem 3.2rem;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
  border-radius: 0.8rem;
`
