import * as S from "@StyledComponents/Expenditurestyle.jsx";
import { useNavigate } from "react-router-dom";
const ExpenditureItem = ({ expenses, activeIndex }) => {
  const navigate = useNavigate();
  const filterMonthlist = expenses
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA - dateB !== 0) {
        return dateB - dateA;
      } else {
        return b.amount - a.amount;
      }
    })
    .filter((item) => {
      const itemMonth = (new Date(item.date).getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const activeMonth = (activeIndex + 1).toString().padStart(2, "0");
      return itemMonth === activeMonth;
    });
  // new Date(item.date).getMonth() + 1 === activeIndex + 1
  return (
    <S.ExpenditureUl>
      {filterMonthlist.length > 0 ? (
        filterMonthlist.map((item) => (
          <S.ExpenditureLi
            key={item.id}
            id={item.id}
            onClick={() => {
              navigate(`/detail/${item.id}`);
            }}
          >
            <div className="detail-info">
              <p>{item.date}</p>
              <br />
              <p className="light-blue">
                {item.category} - {item.content}
              </p>
            </div>
            <div className="price-info">
              <p className="bold-blue">
                {Number(item.amount).toLocaleString()}원
              </p>
            </div>
          </S.ExpenditureLi>
        ))
      ) : (
        <div className="notice">내역이 없습니다.😅</div>
      )}
    </S.ExpenditureUl>
  );
};

export default ExpenditureItem;
