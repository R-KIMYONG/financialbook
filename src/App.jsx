import { useEffect, useState } from "react";
import "./App.css";
import Addform from "@components/Addform";
import { GlobalStyle } from "@StyledComponents/GlobalStyle.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpendiDetail from "@pages/ExpendiDetail";
import fakeData from "@/fakeData.json";
function App() {
  //각항목을 담은 state
  const [expenses, setExpenses] = useState(() => {
    const localData = localStorage.getItem("mylocalData");
    return localData ? JSON.parse(localData) : fakeData;
  });
  const [activeIndex, setActiveIndex] = useState(() => {
    const monthIndex = localStorage.getItem("monthIndex");
    return monthIndex ? JSON.parse(monthIndex) : new Date().getMonth() + 1;
  });

  useEffect(() => {
    localStorage.setItem("mylocalData", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Addform
                setExpenses={setExpenses}
                expenses={expenses}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            }
          />

          <Route
            path="/detail/:id"
            element={
              <ExpendiDetail expenses={expenses} setExpenses={setExpenses} />
            }
          />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
