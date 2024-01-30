import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1703979224361-ba5b9993b7ea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover', height: '100vh' }}>
      <h1>Counter App</h1>
      <div className="counter-container">
        <button className="increment-btn" onClick={increment}>
          Increment
        </button>
        <span className="count-label">Count: {count}</span>
        <button className="decrement-btn" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

