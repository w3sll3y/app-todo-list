import styled from "styled-components";

export const Container = styled.div<{ status: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  padding: 25px;
  position: relative;
  margin: 5px;
  background-color: ${(props) => (props.status ? '#55efc4' : '#dfe6e9')};

  border-radius: 10px;
`;

export const TitleContainer = styled.div<{ status: boolean }>`
  color: #2d3436;
  text-decoration: ${(props) => (props.status ? 'line-through' : 'none')};
`;

export const CheckboxContainer = styled.div`
  position: absolute;
  justify-content: center;
  width: 70px;
  align-items: center;
  right: 26px;
  top: 10px;
`;

export const ButtonDelete = styled.button`
  background-color: transparent;
  position: absolute;
  left: 25px;
  top: 0px;
`;