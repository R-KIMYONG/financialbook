import { useState } from "react";
import "./App.css";
import Addform from "./components/Addform";
import Monthlist from "./components/Monthlist.jsx";
import { GlobalStyle } from "./StyledComponents/GlobalStyle.jsx";

function App() {
  //각항목을 담은 state
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <GlobalStyle />
      <div id="main">
        <Addform setExpenses={setExpenses} expenses={expenses} />
      </div>
    </>
  );
}

export default App;
