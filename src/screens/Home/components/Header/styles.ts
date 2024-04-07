import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  min-width: 100%;
  top: 0;
  background-color: #2c3e50;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    align-items: start;
  }
`;

export const MenuTextContainer = styled.div`
  display: flex;
  font-style: italic;
  margin-left: 150px;

  font-weight: bold;

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const ButtonLoggoutContainer = styled.div`
  margin-right: 100px;
  @media (max-width: 768px) {
    margin-right: 0px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const ButtonLoggout = styled.button`
  background-color: #e74c3c;
  position: absolute;
  right: 25px;
  top: 7px;
  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 768px) {
    margin: 5px;
    font-size: 14px;
  }
`;