// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { HeaderNavigation, StyledLink } from './Navigation.style';

import { IconContext } from "react-icons";
import { IoIosHome } from "react-icons/io";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderNavigation>
      <StyledLink to="/">
      <IconContext.Provider value={{ size: "30px" }}>
        <IoIosHome/>
      </IconContext.Provider>
      </StyledLink>
      {isLoggedIn && <StyledLink to="/Contacts">Contacts</StyledLink>}
    </HeaderNavigation>
  );
};
