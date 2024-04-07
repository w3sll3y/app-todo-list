import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  padding: 25px;
  position: relative;
  margin: 5px;
  background-color: #b2bec3;

  border-radius: 10px;
`;

export const TitleContainer = styled.div`
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