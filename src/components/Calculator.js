import { useState } from "react";
import { Buttons } from "./Buttons";
import { evaluate, format } from "mathjs";

export const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [prevOperand, setPrevOperand] = useState("");
  const [operator, setOperator] = useState("");

  // FUNCTIONS
  // FUNCTIONS

  const isOperator = (value) => {
    const operators = ["+", "-", "/", "*"];
    if (operators.indexOf(value) === -1) {
      return false;
    } else {
      return true;
    }
  };

  const delLastChar = (value) => {
    const newValue = value.split("").slice(0, -1).join("");
    return newValue;
  };

  const allClear = () => {
    setCurrentOperand("0");
    setOperator("");
    setPrevOperand("");
  };

  const equalFunction = () => {
    let result;
    if (currentOperand === "-") return;
    if (operator) {
      result = evaluate(prevOperand + operator + currentOperand);
    }
    if (!operator) {
      result = evaluate(currentOperand);
    }
    // result = format(result, { precision: 14 });

    if (currentOperand === "0") return;
    setPrevOperand(result);
    setOperator("");
    setCurrentOperand(result);
  };

  // ONCLICK FUNCTION
  // ONCLICK FUNCTION

  const onClick = (e) => {
    const value = e.target.getAttribute("value");

    if (!isNaN(value)) {
      if (currentOperand === "0") setCurrentOperand(value);
      else setCurrentOperand((c) => c + value);
    }
    if (value === "clear") allClear();
    if (value === "del") {
      if (currentOperand.length > 1) setCurrentOperand((c) => delLastChar(c));
      if (currentOperand.length === 1) setCurrentOperand("0");
    }
    if (isOperator(value)) {
      if (!operator && !prevOperand) {
        setPrevOperand(currentOperand);
        setCurrentOperand("0");
        setOperator(value);
      }
      if (prevOperand && !operator) {
        setOperator(value);
        setCurrentOperand("");
      }

      if (prevOperand && operator) {
        let result;
        if (value === "-") {
          if (!currentOperand) setCurrentOperand("-");
          else if (currentOperand === "0") setCurrentOperand("-");
          else if (currentOperand === "-") setCurrentOperand("");
          else {
            result = evaluate(prevOperand + operator + currentOperand);
            setPrevOperand(result);
            setCurrentOperand("0");
            setOperator(value);
          }
        } else {
          if (currentOperand === "-") {
            setCurrentOperand("0");
            setOperator(value);
          } else {
            result = evaluate(prevOperand + operator + currentOperand);
            setPrevOperand(result);
            setCurrentOperand("0");
            setOperator(value);
          }
        }
      }
    }
    if (value === ".") {
      if (currentOperand.includes(".")) return;
      setCurrentOperand((c) => c + value);
    }

    if (value === "=") equalFunction();
  };

  return (
    <div className="Calculator__container">
      <div className="Display__container">
        <div className="Prev__operand">{prevOperand + operator}</div>
        <div className="Current__operand" id="display">
          {currentOperand}
        </div>
      </div>
      <Buttons onClick={onClick} />
    </div>
  );
};
