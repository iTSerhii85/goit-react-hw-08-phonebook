import styled from 'styled-components';

export const DewCont = styled.div`
  writing-mode: vertical-rl;
  /* text-orientation: upright; */
  /* padding: 3px; */
  height: 100vh;

  /* margin-top: -35px; */
  width: 50px;
  /* height: 76vh; */

  /* border-radius: 8px; */
  background: rgba(8, 8, 8, 0.46);
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  /* border: 1px solid #ffffff; */
  
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

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
`