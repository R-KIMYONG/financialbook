import * as S from "../StyledComponents/Expenditurestyle.jsx";
import { useNavigate } from "react-router-dom";
const ExpenditureItem = ({ expenses, activeIndex }) => {
  const navigate = useNavigate();
  console.log(expenses);
  console.log(activeIndex + 1);
  return (
    <S.ExpenditureUl>
      {expenses.length > 0 ? (
        expenses
          .filter(
            (item) => Number(item.date.substring(5, 7)) === activeIndex + 1
          )
          .map((item) => (
            <S.ExpenditureLi
              key={item.id}
              id={item.id}
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
            >
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
        <div className="notice">
          빈칸에 알맞는양식대로 채워서 관리시작해보세요
        </div>
      )}
    </S.ExpenditureUl>
  );
};

export default ExpenditureItem;
