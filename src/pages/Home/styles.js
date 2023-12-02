import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;
    margin: 0rem 12.3rem;
    position: relative;
    
    .titleLayout {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(transparent, red);
      border-radius: 10px;
      bottom: 0;
    }
  }
  `;

export const MainTags = styled.div`
  height: 717px;
  align-items: flex-start;
  position: relative;
  padding-right: 2.4rem;
  overflow-y: auto;
`;
