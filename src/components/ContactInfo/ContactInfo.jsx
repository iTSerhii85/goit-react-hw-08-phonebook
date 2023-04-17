import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectContacts } from 'redux/contacts/selectors';
import { ContactWrapper, Info, InfoWrapper } from './ContactInfo.style';
import { FcBusinessContact } from 'react-icons/fc';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';

import { IconContext } from 'react-icons';
import { useState } from 'react';
import { UpdateForm } from 'components';

export const ContactInfo = () => {
  const { id } = useParams();
  const contacts = useSelector(selectContacts);
  const [updateUser, setUpdateUser] = useState(false);

  const contact = contacts.find(contact => contact.id === id);

  return (
    <ContactWrapper>
      <IconContext.Provider
        value={{ size: '10em', style: { marginTop: '-120px' } }}
      >
        <FcBusinessContact />
      </IconContext.Provider>
      {!updateUser ? (
        <InfoWrapper>
          <Info>
            <IconContext.Provider value={{ size: '40px' }}>
              <BsFillPersonFill />
            </IconContext.Provider>{' '}
            {contact.name}
          </Info>
          <Info>
            <IconContext.Provider value={{ size: '40px' }}>
              <BsFillTelephoneFill />
            </IconContext.Provider>{' '}
            {contact.number}
          </Info>
          <button type="button" onClick={() => setUpdateUser(true)}>
            Update
          </button>
        </InfoWrapper>
      ) : (
        <UpdateForm user={contact} updateUser={setUpdateUser} />
      )}
    </ContactWrapper>
  );
};
