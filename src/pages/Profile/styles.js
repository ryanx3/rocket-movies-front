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
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  > label {
    display: flex;
    gap: 0.8rem;
    cursor: pointer;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: calc(100vw - 16rem);
    }

    input {
      position: absolute;
      right: 0;
      z-index: -1;

      width: 100%;
    }

    svg, span {
      transition: filter 0.2s;
    }

    &:hover {
      svg, span {
        filter: brightness(0.9);
      }
    }
  }
`;
