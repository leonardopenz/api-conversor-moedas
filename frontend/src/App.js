import { React } from "react";
import CurrencyConverter from "./CurrencyConverter";
import "./App.css";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Conversor de Moeda</h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
