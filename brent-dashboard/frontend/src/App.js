// src/App.js
import React from 'react';
import PriceChart from './components/PriceChart';

function App() {
  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>🛢️ Brent Oil Dashboard</h1>
      <PriceChart />
    </div>
  );
}

export default App;
