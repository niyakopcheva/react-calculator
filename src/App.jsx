import "../src/reset.css"
import "../src/style.css"
import { useState } from "react";

function App() {
  const [currentOperand, setCurrentOperand] = useState("");
    const [previousOperand, setPreviousOperand] = useState("");
    const [operation, setOperation] = useState(null);

    const appendNumber = (number) => { 
        setCurrentOperand(currentOperand + number);
    } 

    const chooseOperation = (operation) => {
      let opSymbol = "";
      switch (operation) {
        case "divide":
          opSymbol = "÷";
          break;
        case "multiply":
          opSymbol = "*";
          break;
        case "add":
          opSymbol = "+";
          break;
        case "subtract":
          opSymbol = "-";
          break;
        default:
          break;
      }
      if(currentOperand === "") return;
      if(previousOperand !== "") {

      }
      setOperation(opSymbol);
      setPreviousOperand(currentOperand);
      setCurrentOperand("");
    }

    const calculate = () => {
      let sum = 0;
      if(previousOperand !== "" && currentOperand !== "" && operation !== null) {
        let num1 = Number(previousOperand);
        console.log(typeof(num1));
        let num2 = Number(currentOperand);
        console.log(typeof(num1));
        switch (operation) {
          case "÷":
            sum = num1 / num2;
            break;
          case "*":
            sum = num1 * num2;
            break;
          case "+":
            sum = num1 + num2;
            break;
          case "-":
            sum = num1 - num2;
            break;
          default:
            break;
        }
        setCurrentOperand(sum);
        setPreviousOperand("");
        setOperation(null);
      }
      
    }
    
    const clearOutput = () => {
      setCurrentOperand("");
      setPreviousOperand("");
      setOperation(null);
    }

    const deleteLastDigit = () => {
      setCurrentOperand(currentOperand.substring(0, currentOperand.length - 1));
    }
    
    return (
        <>
            <div className="calc-container">
                <div className="output">
                    <div className="previous-operand">{previousOperand} {operation}</div>
                    <div className="current-operand">{currentOperand}</div>
                </div>
                <button className="span-two" onClick={() => clearOutput()}>AC</button>
                <button onClick={() => deleteLastDigit()}>DEL</button>
                <button onClick={() => chooseOperation("divide")}>÷</button>
                <button onClick={() => appendNumber("1")}>1</button>
                <button onClick={() => appendNumber("2")}>2</button>
                <button onClick={() => appendNumber("3")}>3</button>
                <button onClick={() => chooseOperation("multiply")}>x</button>
                <button onClick={() => appendNumber("4")}>4</button>
                <button onClick={() => appendNumber("5")}>5</button>
                <button onClick={() => appendNumber("6")}>6</button>
                <button onClick={() => chooseOperation("add")}>+</button>
                <button onClick={() => appendNumber("7")}>7</button>
                <button onClick={() => appendNumber("8")}>8</button>
                <button onClick={() => appendNumber("9")}>9</button>
                <button onClick={() => chooseOperation("subtract")}>-</button>
                <button onClick={() => appendNumber(".")}>.</button>
                <button onClick={() => appendNumber("0")}>0</button>
                <button className="span-two" onClick={() => calculate()}>=</button>
            </div>
    </>
    );

  
}

export default App
