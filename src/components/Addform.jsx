import React, { useState } from "react";
import * as S from "../StyledComponents/Formstyle.jsx";
import { v4 as uuidv4 } from "uuid";
import AddInputs from "./AddInputs.jsx";
import Monthlist from "./Monthlist.jsx";

const Addform = ({ setExpenses, expenses }) => {
  const [inputs, setInpus] = useState({
    id: "",
    date: "",
    category: "",
    amount: "",
    content: "",
  });
  const [error, setError] = useState({});

  const handleAddForm = async (e) => {
    e.preventDefault();

    if (checkInput()) {
      resetAddform();
      return;
    }
    // console.log(date.slice(5, 7));
    const newExpenses = {
      id: uuidv4(),
      date: inputs.date,
      category: inputs.category,
      amount: inputs.amount,
      content: inputs.content,
    };

    setExpenses((prev) => [...prev, newExpenses]);
    resetAddform();
  };

  const checkInput = () => {
    const newError = {};
    if (inputs.date === "") newError["date"] = "날짜를 입력하세요.";

    if (!inputs.category.trim()) {
      newError["category"] = "항목을 입력하세요.";
    } else if (!isNaN(inputs.category.trim())) {
      newError["category"] = "항목은 문자여야합니다.";
    }
    if (!inputs.amount.trim()) {
      newError["amount"] = "금액을 입력하세요.";
    } else if (isNaN(inputs.amount.trim())) {
      newError["amount"] = "금액은 숫자여야 합니다.";
    }
    if (!inputs.content.trim()) newError["content"] = "내용을 입력하세요.";
    setError(newError);

    if (Object.keys(newError).length > 0) {
      alert(Object.values(newError).join("\n"));
      return true;
    }

    return false;
  };

  const resetAddform = () => {
    setInpus({
      date: "",
      category: "",
      amount: "",
      content: "",
    });
    setError({});
  };

  return (
    <>
      <div id="main">
        <S.Fromsubmit onSubmit={handleAddForm}>
          {[...Object.entries(inputs)]
            .filter(([key]) => key !== "id")
            .map(([item, value], index) => (
              // console.log(item,value)
              <AddInputs
                key={index}
                item={item}
                value={value}
                setInpus={setInpus}
              />
            ))}
          <S.FormSaveBtn>저장</S.FormSaveBtn>
        </S.Fromsubmit>
        <Monthlist expenses={expenses} />
      </div>
    </>
  );
};

export default Addform;
