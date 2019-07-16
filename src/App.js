import React from 'react';
import './App.css';
import CurrencyConverter from "./component/Currency/CurrencyConverter";
import TemperatureConverter from "./component/Temperature/TemperatureConverter"
import TextToUpper from "./component/TextToUpper/TextToUpper";

function App() {
  return (
      <div className="App">
          <h1>Currency Converter</h1>
        <CurrencyConverter layout={'row'}/>
        <h1>Temp Converter</h1>
          <TemperatureConverter/>
          <h1>TextToUpper</h1>
          <TextToUpper/>
      </div>
  );
}

export default App;