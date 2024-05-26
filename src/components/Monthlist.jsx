import React, { useEffect, useContext, useCallback } from "react";
import * as S from "@StyledComponents/Monthstyle.jsx";
import Totalex from "@components/Totalex.jsx";
import ExpenditureItem from "@components/ExpenditureItem.jsx";
import { FamilyContext } from "@FamilyContext/FamilyContext";

const Monthlist = ({ setInputs }) => {
  const { activeIndex, setActiveIndex } = useContext(FamilyContext);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  const handleClick = useCallback(
    (index) => {
      const clickedMonth = `2024-${String(index + 1).padStart(2, "0")}-01`;
      setInputs((prev) => ({
        ...prev,
        date: clickedMonth,
      }));

      setActiveIndex(index);
    },
    [setInputs, setActiveIndex]
  );

  useEffect(() => {
    localStorage.setItem("monthIndex", JSON.stringify(activeIndex));
  }, [activeIndex]);
  return (
    <div>
      <S.MonthUl>
        {months.map((item, index) => (
          <S.MonthLi
            key={index}
            id={item.id}
            $active={activeIndex === index}
            onClick={() => {
              handleClick(index);
            }}
          >
            {item}월
          </S.MonthLi>
        ))}
      </S.MonthUl>
      <Totalex />
      <ExpenditureItem />
    </div>
  );
};

export default React.memo(Monthlist);
