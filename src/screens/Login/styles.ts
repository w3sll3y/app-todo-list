import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const ContainerLoginForm = styled.div`
  display: flex;
  justify-content: center;
  text-align:center;
  flex-direction: column;
  padding: 25px;

  width: 25rem;
  height: 30rem;
  background-color: #ecf0f1;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 15rem;
    height: 20rem;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const TitleLogin = styled.text`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #2c3e50;
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const InputBox = styled.input`
  margin: 5px 0;
  color: #2c3e50;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: transparent;
  border: 0px solid;
  color: black;
  border-bottom-width: 1px;
  border-color: #8e44ad;
  outline: none;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
`;

export const ButtonSend = styled.button<{ outline?: boolean }>`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 5px 0 ;
  background-color: ${props => props.outline ? 'transparent' : '#1abc9c'};
  border-color: ${props => props.outline ? '#1abc9c' : 'none'};
  color: ${props => props.outline ? '#1abc9c' : 'none'};
  &:hover {
    background-color: ${props => props.outline ? '#3498db' : '#16a085'};
    color: ${props => props.outline ? 'white' : ''};
    border-color: ${props => props.outline ? '#3498db' : '##16a085'};
  }
`;

