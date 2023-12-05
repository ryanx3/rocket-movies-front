import styled from "styled-components";
import background from '../../images/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  main {
    margin: 23.5rem auto;
    padding: 0 16rem;

    h1 {
      color: ${({ theme }) => theme.COLORS.RED};
      font-size: 4.8rem;
      font-weight: 700;
    }

    p {
      font-size: 1.4rem;
      white-space: nowrap;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: center;
      font-size: 2.4rem;
      font-weight: 500;

      margin: 4.8rem 0;

      display: flex;
    }

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      justify-content: center;
      font-size: 1.6rem;

      margin-top: 4.2rem;
    }

    div:nth-child(6) {
      margin-bottom: 1.6rem;
    }
  }
`;

export const Background = styled.div`
  background: url(${background}) no-repeat center center;
  background-size: cover;
  flex: 1;
  opacity: 0.7;
`;
