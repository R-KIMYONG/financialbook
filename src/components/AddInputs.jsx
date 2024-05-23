import React from "react";
import * as S from "../StyledComponents/Formstyle.jsx";
const AddInputs = ({ item, value, setInpus }) => {
  const handleChange = (e) => {
    setInpus((prevInputs) => ({
      ...prevInputs,
      [item]: e.target.value,
    }));
  };
  return (
    <S.Formdiv>
      <S.Formlabel htmlFor="date">
        {item === "date"
          ? "날짜"
          : item === "category"
          ? "항목"
          : item === "amount"
          ? "금액"
          : "내용"}
      </S.Formlabel>
      <S.Forminput
        type={item === "date" ? "date" : "text"}
        value={value}
        placeholder={
          item === "category"
            ? "지출 항목"
            : item === "amount"
            ? "지출 금액"
            : "지출 내용"
        }
        onChange={handleChange}
      />
    </S.Formdiv>
  );
};

export default AddInputs;
