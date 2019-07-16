import React from 'react';
import './App.css';
import CurrencyConverter from "./component/currency/CurrencyConverter";

function App() {
  return (
      <div className="App">
        <CurrencyConverter layout={'row'}/>
      </div>
  );
}

export default App;