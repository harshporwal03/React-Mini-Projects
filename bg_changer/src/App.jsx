import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000");

  return (
    <>
      <div className="bg-div" style={{ backgroundColor: color }}>
        <div className="box">
          <div className="options">
            <button
              onClick={() => {
                setColor("red");
              }}
            >
              red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
            >
              green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
