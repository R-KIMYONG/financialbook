import { useState } from "react";
import "./App.css";
import Addform from "./components/Addform";
import { GlobalStyle } from "./StyledComponents/GlobalStyle.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpendiDetail from "./components/ExpendiDetail";

function App() {
  //각항목을 담은 state
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Addform setExpenses={setExpenses} expenses={expenses} />}
          />
          <Route path="/detail/:id" element={<ExpendiDetail expenses={expenses} setExpenses={setExpenses}/>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
