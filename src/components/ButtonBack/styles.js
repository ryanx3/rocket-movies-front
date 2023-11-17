import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
display: flex;
align-items: center;

color: ${({ theme }) => theme.COLORS.PINK};
gap: .8rem;
width: fit-content;
`