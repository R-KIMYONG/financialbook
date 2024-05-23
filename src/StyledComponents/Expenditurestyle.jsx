import styled from "styled-components";

export const ExpenditureUl = styled.ul`
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  display: grid;
  grid-template-rows: auto;
  gap: 20px;
  & > div {
    text-align: center;
    font-size: 40px;
  }
`;

export const ExpenditureLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lightgrey;
  padding: 20px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  & > div > .light-blue {
    color: blue;
  }
  & > div > .bold-blue {
    font-size: 25px;
    color: darkblue;
  }
`;
