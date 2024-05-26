import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import * as S from "@StyledComponents/ExpendiDetail.jsx";

const ExpendiDetail = ({ expenses, setExpenses }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dateRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();
  const contentRef = useRef();
  const expense = expenses.find((item) => item.id === id);

  const handleUpdate = () => {
    if (isNaN(amountRef.current.value)) {
      alert("금액은 숫자으로만 수정가능합니다.");
      return;
    }
    const updateExpense = expenses.map((item) =>
      item.id === id
        ? {
            ...item,
            date: dateRef.current.value || item.date,
            category: categoryRef.current.value || item.category,
            amount: amountRef.current.value || item.amount,
            content: contentRef.current.value || item.content,
          }
        : item
    );

    setExpenses(updateExpense);
    navigate("/");
  };

  const handleDelete = () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      const updatedExpenses = expenses.filter((item) => item.id !== id);
      setExpenses(updatedExpenses);
      navigate("/");
    } else {
      return;
    }
  };
  return (
    <S.DetailDiv>
      <>
        <h2>상세 정보</h2>
        {Object.entries(expense)
          .filter(([item]) => item !== "id")
          .map(([item, value]) => (
            <div className="detail-input" key={nanoid()}>
              <label htmlFor={item}>
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
              </label>
              <input
                type={
                  item === "date"
                    ? "date"
                    : item === "amount"
                    ? "number"
                    : "text"
                }
                name={item}
                ref={
                  item === "date"
                    ? dateRef
                    : item === "amount"
                    ? amountRef
                    : item === "content"
                    ? contentRef
                    : categoryRef
                }
                defaultValue={value}
                autoComplete="off"
              />
            </div>
          ))}
        <div className="UDB-btnbox">
          <button
            onClick={() => {
              handleUpdate();
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            뒤로 가기
          </button>
        </div>
      </>
    </S.DetailDiv>
  );
};

export default ExpendiDetail;
