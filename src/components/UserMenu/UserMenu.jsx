import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Wrapper } from './UserMenu.style';

import { FcExport } from "react-icons/fc";
import { IconContext } from "react-icons";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
      <IconContext.Provider value={{ size: "25px"}}>
        <FcExport/>
      </IconContext.Provider>
      <p>Log out</p>
      </button>
    </Wrapper>
  );
};
