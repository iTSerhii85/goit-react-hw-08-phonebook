import styled from 'styled-components';

export const ContactWrapper = styled.div`
  padding: 10px 10px;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  margin-top: 10px;

  font-size: 40px;
  font-weight: 500;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const InfoWrapper = styled.div`
  text-align: left;
  width: 100%;
  padding: 10px;
`;

export const Info = styled.p`
  margin: 0;
  margin-bottom: 20px;
`;

export const UpdateButton = styled.button`
  height: 45px;
  width: 100px;
  font-size: 18px;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%);
  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%),
    0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%),
    inset 0px -0.01em 0px rgb(58 65 111 / 50%);
  padding: 0 15px;
  border-radius: 0.3em;
  color: #fff;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
      0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #3c4fe0;
    transform: translateY(-0.1em);
  }

  &:active {
    box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
    transform: translateY(0em);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 15px;
  align-items: center;
  margin-left: 55px;

  a {
    padding: 0;
    margin-top: -10px;
  }
`;
