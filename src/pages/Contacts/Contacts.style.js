import styled from 'styled-components';

export const ContactWrapper = styled.div`
  padding: 20px 10px;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 76vh;
  margin-top: -35px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  h2 {
    font-size: 30px;
    font-weight: 700;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Header = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 60px;
  margin-bottom: 55px;
  margin-top: 75px;
`;
