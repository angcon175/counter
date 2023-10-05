import { useState } from "react";
import Header from "./Header.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <>
      <Header />
      <div className="main">
        <h1 className="heading">{count}</h1>
        <div className="button">
          <button className="btn" onClick={inc}>
            increment
          </button>
          <button className="btn" onClick={dec}>
            decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
