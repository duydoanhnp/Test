import React from "react";
import { useState } from "react";

export default function Practice2() {
  const [count, setCount] = useState([]);
  const [number, setNumber] = useState();

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

  const Click = () => {
    count.length = number;
    let a = [...count];
    return setCount(a);
  };

  const handleInput = (event) => {
    const b = event.target.value;
    setNumber(b);
  };

  return (
    <div className="practice2">
      <h1>Practice2</h1>
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
      <h5 style={{ paddingTop: "20px" }}>Enter a number of square</h5>
      <div className="click" style={{ paddingBottom: "20px" }}>
        <input
          id="number"
          type="input"
          placeholder="numer"
          style={{ padding: "2px 0px 8px 0px" }}
          onChange={handleInput}
        ></input>
        <button type="button" className="btn btn-success" onClick={Click}>
          Click
        </button>
      </div>
      <div className="main">
        <div className="boder">
          {count.map((ab, index) => {
            return (
              <div className="item">
                <div className="content" key={index}>
                  {ab}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
