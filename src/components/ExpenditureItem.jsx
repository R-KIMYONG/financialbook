import * as S from "../StyledComponents/Expenditurestyle.jsx";

const ExpenditureItem = ({ expenses }) => {
  return (
    <S.ExpenditureUl>
      {expenses.length > 0 ? (
        expenses.map((item) => (
          <S.ExpenditureLi key={item.id}>
            <div>
              <p>{item.date}</p>
              <br />
              <p className="light-blue">
                {item.category} - {item.content}
              </p>
            </div>
            <div>
              <p className="bold-blue">
                {Number(item.amount).toLocaleString()}원
              </p>
            </div>
          </S.ExpenditureLi>
        ))
      ) : (
        <div className="notice">빨리 관리하세요</div>
      )}
    </S.ExpenditureUl>
  );
};

export default ExpenditureItem;
