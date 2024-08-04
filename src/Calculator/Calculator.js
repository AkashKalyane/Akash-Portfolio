import React, { useState } from "react";

import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  function backspaceHandler() {
    setDisplay(display.substring(0, display.length - 1));
  }

  function clickHandler(e) {
    let value = display + e.target.id;
    setDisplay(value);
  }

  function equalHandler() {
    if (display === "") {
      setDisplay("Empty!");
      setTimeout(() => setDisplay(""), 2000);
    } else {
      try {
        let string = eval(display).toString();
        setDisplay(string);
      } catch (e) {
        let string = display;
        setDisplay("Invalid Expression!");
        setTimeout(() => setDisplay(string), 2000);
      }
    }
  }

  return (
    
      <div className="cal-box">
        <div className="cal-container">
          <div className={`calculator ${isDarkMode && "dark"}`}>
            <div
              className={`theme-toggler ${isDarkMode && "active"}`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <i className="toggler-icon" />
            </div>
            <div className="display-screen">
              <div id="display">{display}</div>
            </div>
            <div className="buttons">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <button
                        className="btn-operator"
                        id="clear"
                        onClick={() => setDisplay("")}
                      >
                        C
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-operator"
                        id="/"
                        onClick={clickHandler}
                      >
                        ÷
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-operator"
                        id="*"
                        onClick={clickHandler}
                      >
                        ×
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-operator"
                        id="backspace"
                        onClick={backspaceHandler}
                      >
                        &lt;
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="btn-number"
                        id={7}
                        onClick={clickHandler}
                      >
                        7
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-number"
                        id={8}
                        onClick={clickHandler}
                      >
                        8
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-number"
                        id={9}
                        onClick={clickHandler}
                      >
                        9
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-operator"
                        id="-"
                        onClick={clickHandler}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="btn-number"
                        id={4}
                        onClick={clickHandler}
                      >
                        4
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-number"
                        id={5}
                        onClick={clickHandler}
                      >
                        5
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-number"
                        id={6}
                        onClick={clickHandler}
                      >
                        6
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-operator"
                        id="+"
                        onClick={clickHandler}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="btn-number"
                        id={1}
                        onClick={clickHandler}
                      >
                        1
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-number"
                        id={2}
                        onClick={clickHandler}
                      >
                        2
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-number"
                        id={3}
                        onClick={clickHandler}
                      >
                        3
                      </button>
                    </td>
                    <td rowSpan={2}>
                      <button
                        className="btn-equal"
                        id="equal"
                        onClick={equalHandler}
                      >
                        =
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="btn-operator"
                        id="("
                        onClick={clickHandler}
                      >
                        (
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-number"
                        id={0}
                        onClick={clickHandler}
                      >
                        0
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn-operator"
                        id=")"
                        onClick={clickHandler}
                      >
                        )
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Calculator;
