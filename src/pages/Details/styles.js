import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: "header" "content";
  overflow: hidden;
  padding-bottom: 2rem;

  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, red);
    border-radius: 10px;
    bottom: 0;
  }
  
  > main {
    grid-area: content;
    margin: 4rem 12.3rem 0 12.3rem;
    padding-right: 24px;
    position: relative;
    overflow-y: auto;

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }


    > section {
  
       h1 {
        display: flex;
        align-items: center;
  
        font-size: 3.6rem;
        font-weight: 5;
  
        margin-top: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
  
         span {
          display: flex;
          align-items: center;
          margin-left: 10px;
          svg {
            width: 20px;
            height: 20px;
            margin-left: 10px;
          }
        }
      }
      
      .TagDetails span {
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};
        }
      }
    
      section {
        p:nth-child(1) {
          margin-top: 4rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
          position: relative;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -20px;
          width: 100%;
          height: 1px; 
          background-color: ${({ theme }) => theme.COLORS.PINK}; 
          box-shadow: 0px 0px 2px 0px red; 
        }
      }
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