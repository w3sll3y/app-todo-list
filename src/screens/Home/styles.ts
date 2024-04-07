import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.text`
  font-weight: bold;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 50px;
  }
`;

export const ContaninerInputType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40%;
`;

export const InputType = styled.input`
  margin-bottom: 2%;
  color:#2d3436;
  width: 80%;
  padding: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #b2bec3;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #00b894;
`;

export const EmptyTransactions = styled.div``;

export const ListTasks = styled.div`
  margin-top: 25px;
  width: 40%;
  max-height: 65%;
  overflow-y: scroll;
  @media (max-width: 768px) {
    max-width: 25rem;
  }
`;