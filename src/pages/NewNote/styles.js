import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: "header" "content";

  .Tags {
    width: 100%;
    padding: 1.6rem;
    border-radius: 0.8rem;

    display: flex;
    align-items: flex-start;
    gap: 2.4rem;
    align-self: stretch;

    flex-wrap: wrap;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    margin: 2.4rem 0 4rem 0;
  }
`;

export const InputSection = styled.section`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;
`;
