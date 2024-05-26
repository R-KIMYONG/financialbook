import React from "react";
import * as S from "@StyledComponents/Formstyle.jsx";
import { useCallback } from "react";
const AddInputs = ({ item, value, setInputs }) => {
  const handleChange = useCallback((e) => {
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
  });

  return (
    <S.Formdiv>
      <S.Formlabel htmlFor="date">
        {(() => {
          switch (item) {
            case "date":
              return "날짜";
            case "category":
              return "항목";
            case "amount":
              return "금액";
            case "content":
              return "내용";
            default:
              return "";
          }
        })()}
      </S.Formlabel>
      <S.Forminput
        type={(() => {
          switch (item) {
            case "ampunt":
              return "number";
            default:
              return "text";
          }
        })()}
        value={value}
        name={item}
        autoComplete="off"
        placeholder={(() => {
          switch (item) {
            case "category":
              return "지출항목";
            case "amount":
              return "지출 금액";
            case "date":
              return "YYYY-MM-DD";
            case "content":
              return "지출 내용";
            default:
              return "";
          }
        })()}
        onChange={handleChange}
      />
    </S.Formdiv>
  );
};

export default React.memo(AddInputs);
