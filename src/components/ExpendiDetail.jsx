import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../StyledComponents/ExpendiDetail.jsx";

const ExpendiDetail = ({ expenses, setExpenses }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const expense = expenses.find((item) => item.id === id);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setExpenses((prevExpenses) =>
      prevExpenses.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };

  const handleUpdate = () => {
    if (isNaN(expense.amount)) {
      alert("금액은 숫자으로만 수정가능합니다.");
      return;
    }
    navigate("/");
  };

  const handleDelete = () => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((item) => item.id !== id)
    );
    navigate("/");
  };

  return (
    <S.DetailDiv>
      {expense ? (
        <>
          <h2>상세 정보</h2>
          {console.log(Object.entries(expense))}
          {Object.entries(expense)
            .filter(([key]) => key !== "id")
            .map(([key, value], index) => (
              <div className="detail-input">
                <label htmlFor="date">
                  {key === "date"
                    ? "날짜"
                    : key === "category"
                    ? "항목"
                    : key === "amount"
                    ? "금액"
                    : key === "content"
                    ? "내용"
                    : ""}
                </label>
                <input
                  type={key === "date" ? "date" : "text"}
                  name={key}
                  value={value}
                  onChange={onChangeInput}
                />
              </div>
            ))}

          {/* <div className="detail-input">
            <label htmlFor="date">날짜</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={onChangeInput}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="category">항목</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={onChangeInput}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="content">내용</label>
            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={onChangeInput}
            />
          </div>

          <div className="detail-input">
            <label htmlFor="amount">금액</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={onChangeInput}
            />
          </div> */}

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
      ) : (
        <p>항목을 찾을 수 없습니다.</p>
      )}
    </S.DetailDiv>
  );
};

export default ExpendiDetail;
