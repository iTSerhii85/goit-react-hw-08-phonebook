import { BsFillPersonFill } from 'react-icons/bs';
import { Item, List, DeleteButton } from './ContactList.style';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks';
import { NavLink } from 'react-router-dom';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <NavLink to={`${contact.id}`} >
              <BsFillPersonFill />
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </NavLink>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </DeleteButton>
          </Item>
        );
      })}
    </List>
  );
};
