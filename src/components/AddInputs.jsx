import React from "react";
import * as S from "../StyledComponents/Formstyle.jsx";
const AddInputs = ({ item, value, setInputs }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prevInputs) => {
      if (name === "date") {
        const [year, month] = prevInputs.date.split("-");
        let day = value.split("-")[2];
        const validDay = day > 0 && day <= 31 ? day : "";
        const newDate = `${year}-${month}-${validDay}`;
        return {
          ...prevInputs,
          date: newDate,
        };
      }
      return {
        ...prevInputs,
        [name]: value,
      };
    });
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
        type={item === "amount" ? "number" : "text"}
        value={value}
        name={item}
        autoComplete="off"
        placeholder={
          item === "category"
            ? "지출 항목"
            : item === "amount"
            ? "지출 금액"
            : item === "date"
            ? "YYYY-MM-DD"
            : ""
        }
        onChange={handleChange}
      />
    </S.Formdiv>
  );
};

export default AddInputs;
