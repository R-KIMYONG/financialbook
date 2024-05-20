import { useState } from "react";
import "./App.css";
import Addform from "./components/Addform";
import { GlobalStyle } from "./StyledComponents/GlobalStyle.jsx";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <GlobalStyle />
      <div id="main">
        <Addform />
      </div>
    </>
  );
}

export default App;
