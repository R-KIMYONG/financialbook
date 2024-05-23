import React from "react";
import * as S from "../StyledComponents/Totalamount.jsx";
const TotalGraph = ({ categoryItem, getCategoryTotal, totalAmount }) => {
  //   const categoryTotal = getCategoryTotal(category);
  //   console.log(((getCategoryTotal("여행") / totalAmount) * 100).toFixed(2));

  return (
    <>
      <S.TotalGraphUl>
        {categoryItem.map((item) => (
          <S.TotalGraphLi
            $activeColor={item}
            $activeWidth={(
              (getCategoryTotal(item) / totalAmount) *
              100
            ).toFixed(2)}
          ></S.TotalGraphLi>
        ))}
      </S.TotalGraphUl>
    </>
  );
};

export default TotalGraph;
