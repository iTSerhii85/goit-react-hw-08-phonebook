import styled from "styled-components";

export const AppHeader = styled.header`
  background: rgba(255, 255, 255, 0.51);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  backdrop-filter: blur(2.4px);
  -webkit-backdrop-filter: blur(2.4px);

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
`