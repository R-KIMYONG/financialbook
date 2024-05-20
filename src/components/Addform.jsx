import React from "react";
import * as S from "../StyledComponents/Formstyle.jsx";

const Addform = () => {
  return (
    <S.Fromsubmit>
      <S.Formdiv>
        <S.Formlabel htmlFor="date">날짜</S.Formlabel>
        <S.Forminput type="date" />
      </S.Formdiv>
      <S.Formdiv>
        <S.Formlabel htmlFor="date">항목</S.Formlabel>
        <S.Forminput type="text" />
      </S.Formdiv>
      <S.Formdiv>
        <S.Formlabel htmlFor="date">금액</S.Formlabel>
        <S.Forminput type="text" />
      </S.Formdiv>
      <S.Formdiv>
        <S.Formlabel htmlFor="date">내용</S.Formlabel>
        <S.Forminput type="text" />
      </S.Formdiv>
      <S.FormSaveBtn>저장</S.FormSaveBtn>
    </S.Fromsubmit>
  );
};

export default Addform;
