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
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  /* border: 1px solid rgba(255, 255, 255, 1); */
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;

export const InfoWrapper = styled.div`
text-align: left;
width: 100%;
padding: 10px;
`;

export const Info = styled.p`
margin: 0;
margin-top: 10px;
`