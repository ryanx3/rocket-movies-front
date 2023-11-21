import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas: "header" "content";

  > header {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};
    display: flex;
    padding-left: 14.4rem;
    grid-area: header;
  }

  > main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    div:nth-child(3) {
      margin-bottom: 2.4rem;
    }

    div:nth-child(5) {
      margin-bottom: 2.4rem;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -9.3rem auto 4rem;

  > img {
    min-width: 18.6rem;
    min-height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.RED};

    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    right: 0.7rem;
    bottom: 0.7rem;

    input {
      display: none;
    }
  }
`;
