import {
  BookForm,
  NewContactBtn,
  CloseModalBtn,
  Filter,
  ContactList,
} from 'components';

// import { GlobalStyle } from '../components/Utils/GlobalStyle';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ContactWrapper, Header, Wrapper} from './Contacts.style';
import { Outlet } from 'react-router-dom';

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
    <Header>Phonebook</Header>
    <Wrapper>
    <ContactWrapper>
      <NewContactBtn showModal={toggleModal} />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </ContactWrapper>
    <Outlet />
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
