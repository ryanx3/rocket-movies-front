import styled from "styled-components";

export const Container = styled.div`
width: .8rem;
height: 9.6rem;

position: absolute;
right: 0;

border-radius: 8px;
background: ${({ theme }) => theme.COLORS.PINK};
`