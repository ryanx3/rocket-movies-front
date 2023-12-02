import styled from "styled-components";


export const Container = styled.button`
display: flex;
align-items: center;

color: ${({ theme }) => theme.COLORS.PINK};
gap: .8rem;
width: fit-content;

border: none;
background: transparent;
`