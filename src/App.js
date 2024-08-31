import React from 'react';
import FetchData from './FetchData';
import ProcessNews from './ProcessNews';
import Predict from './Predict';

function App() {
  return (
    <div className="App">
      <h1>Stock Prediction App</h1>
      <FetchData />
      <ProcessNews />
      <Predict />
    </div>
  );
}

export default App;
