import styled from 'styled-components';

export const DewCont = styled.div`
  writing-mode: vertical-rl;
  /* text-orientation: upright; */
  height: 100vh;
  width: 50px;
  background: rgba(8, 8, 8, 0.46);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);

  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;

  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 1;
`;
