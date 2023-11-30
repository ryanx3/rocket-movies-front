import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: "header" "content";

  section {
    > h1 {
      display: flex;
      align-items: center;

      font-size: 3.6rem;
      font-weight: 5;

      margin-top: 2.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};

    }

    .TagDetails span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};
    }
  }

  section {
    p:nth-child(1) {
      margin-top: 4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: justify;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  text-align: justify;

  margin: 2.4rem 0 4rem;
  gap: 0.8rem;

  > p, span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
    }
  }`