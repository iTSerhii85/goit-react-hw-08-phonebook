import styled from 'styled-components';

export const AppHeader = styled.header`
  background: rgba(8, 8, 8, 0.46);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);

  border-bottom: 1px solid #ffffff;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
