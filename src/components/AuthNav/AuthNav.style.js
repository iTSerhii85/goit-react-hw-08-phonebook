import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderNavigation = styled.nav`
display: flex;
align-items: center;
gap: 30px;
font-size: 22px;
font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
text-decoration: none;
color: black;
`;