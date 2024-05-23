import React, { useState } from "react";
import * as S from "../StyledComponents/Monthstyle.jsx";
import { nanoid } from "nanoid";
import Totalex from "./Totalex.jsx";
import ExpenditureItem from "./ExpenditureItem.jsx";
const Monthlist = ({ expenses }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let month = [];
  for (let i = 1; i <= 12; i++) {
    month[i - 1] = { num: i, id: nanoid() };
  }
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      <S.MonthUl>
        {month.map((item, index) => (
          <S.MonthLi
            key={item.id}
            id={item.id}
            $active={activeIndex === index}
            onClick={() => {
              handleClick(index);
            }}
          >
            {item.num}월
          </S.MonthLi>
        ))}
      </S.MonthUl>
      <Totalex expenses={expenses} activeIndex={activeIndex} />
      <ExpenditureItem expenses={expenses} />
    </div>
  );
};

export default Monthlist;
