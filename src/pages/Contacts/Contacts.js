import Modal from 'components/Modal/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ContactWrapper, Header, Wrapper } from './Contacts.style';
import { Outlet } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FcAddressBook } from 'react-icons/fc';
import {
  BookForm,
  NewContactBtn,
  CloseModalBtn,
  Filter,
  ContactList,
  Developer,
} from 'components';

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header>
        <IconContext.Provider
          value={{
            size: '70px',
            style: { marginBottom: '-10px', marginRight: '10px' },
          }}
        >
          <FcAddressBook />
        </IconContext.Provider>
        Phonebook
      </Header>
      <Wrapper>
        <ContactWrapper>
          <NewContactBtn showModal={toggleModal} />
          <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </ContactWrapper>

        <Outlet />
        <Developer />
      </Wrapper>
      {showModal && (
        <Modal onClose={toggleModal}>
          <CloseModalBtn closeModal={toggleModal} />
          <BookForm closeModal={toggleModal} />
        </Modal>
      )}
    </>
  );
}
