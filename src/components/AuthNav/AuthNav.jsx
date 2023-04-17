import { HeaderNavigation, StyledLink } from './AuthNav.style';

export const AuthNav = () => {
  return (
    <HeaderNavigation>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </HeaderNavigation>
  );
};
