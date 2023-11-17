import styled from "styled-components";

export const Container = styled.div`
  height: 11.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12.3rem;
  gap: 6.4rem;

  border-bottom: 1px solid #3E3B47;
  grid-area: header;

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};

    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    margin-left: 0.8rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: end;

    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.4rem;
      font-weight: 700;
      white-space: nowrap;
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-weight: 400;
      font-size: 1.4rem;
    }
  }
`;
