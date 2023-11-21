import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;
    margin: 0 12.3rem;
  }
`;

export const MainTags = styled.div`
  align-items: flex-start;
  position: relative;
  padding-right: 2.4rem;
  overflow-y: auto;

  .scrollColor {
    width: 0.8rem;
    height: 10rem;
    border-radius: 1.5rem;
    background-color: red;
    position: absolute;
    top: 0;
    right: 0.2rem;
  }
`;
