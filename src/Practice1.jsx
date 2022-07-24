import React, { useState } from "react";

export default function Practice1() {
  const [count, setCount] = useState([]);

  const handleSubtraction = () => {
    count.pop("");
    let a = [...count];
    return setCount(a);
  };

  const handlePlus = () => {
    count.push("");
    let a = [...count];
    return setCount(a);
  };

  return (
    <div className="practice1">
      <h1>Practice1</h1>
      <div className="button">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubtraction}
        >
          -
        </button>
        <button type="button" className="btn btn-success" onClick={handlePlus}>
          +
        </button>
      </div>
      <div className="main">
        <div className="circle">
          {count.map((ab, index) => {
            return (
              <div className="linear" key={index}>
                {ab}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
