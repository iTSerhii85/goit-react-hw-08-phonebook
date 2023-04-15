import styled from 'styled-components';

export const ContactWrapper = styled.div`
  padding: 20px 50px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-top: 10px;

  box-shadow: 6px 7px 43px 4px rgba(0, 0, 0, 1);

  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    320deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 18, 246, 1) 100%
  );
  background: -webkit-linear-gradient(
    320deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 18, 246, 1) 100%
  );
  background: linear-gradient(
    320deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 18, 246, 1) 100%
  );
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const Header = styled.h1`
/* display: block; */
text-align: center;
margin-left: auto;
margin-right: auto;
`
