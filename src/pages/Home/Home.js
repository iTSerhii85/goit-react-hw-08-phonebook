import { Developer } from 'components';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import { Container, Title } from './Home.style';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Title>Phonebook welcome page</Title>
      {!isLoggedIn && (
        <>
          <p>
            To use the functionality, you must{' '}
            <Link to={'/register'}>register</Link> or{' '}
            <Link to={'/login'}>log in</Link> to your account.
          </p>
        </>
      )}
      <Developer />
    </Container>
  );
}
