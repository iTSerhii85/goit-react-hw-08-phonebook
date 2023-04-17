import { AuthNav, Navigation, UserMenu } from 'components';
import { useAuth } from 'hooks';
import { AppHeader, Container, Wrapper } from './AppBar.style';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppHeader>
      <Container>
        <Wrapper>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Wrapper>
      </Container>
    </AppHeader>
  );
};
