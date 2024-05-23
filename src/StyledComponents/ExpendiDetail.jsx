import styled from "styled-components";

export const DetailDiv = styled.div`
  position: absolute;
  background: #fff;
  color: #000;
  padding: 20px 30px;

  border-radius: 10px;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-rows: max-content;
  gap: 20px;
  & > .detail-input {
    display: flex;
    flex-direction: column;
  }
  & > .detail-input > label {
    margin-bottom: 10px;
  }
  & > .detail-input > input {
    width: 800px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  & > .UDB-btnbox {
    display: flex;
    gap: 20px;
  }

  & button {
    background: lightblue;
    color: #fff;
    border: 0px;
    padding: 15px 20px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
