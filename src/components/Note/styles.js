import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 3.2rem;

  display: flex;
  align-items: start;
  flex-direction: column;
  margin-bottom: 2.4rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};

  border: none;
  border-radius: 1.6rem;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    font-size: 2.4rem;
    font-weight: 700;
    display: flex;
    align-items: start;
    flex-direction: column;

    div {
      display: flex;
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme.COLORS.GRAY_NOTE};
    margin: 1.5rem 0;
    text-align: left;
    text-overflow: ellipsis;
    cursor: pointer;
    overflow: hidden;
  }
`;
