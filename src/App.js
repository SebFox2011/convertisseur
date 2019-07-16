import React from 'react';
import './App.css';
import CurrencyConverter from "./component/currency/CurrencyConverter";
import TemperatureConverter from "./component/Temperature/TemperatureConverter"

function App() {
  return (
      <div className="App">
          <h1>Currency Converter</h1>
        <CurrencyConverter layout={'row'}/>
        <h1>Temp Converter</h1>
          <TemperatureConverter/>
      </div>
  );
}

export default App;