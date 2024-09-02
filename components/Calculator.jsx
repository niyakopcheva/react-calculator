import "../src/reset.css"
import "../src/style.css"
import { useState } from "react";

export default function Calculator() {
    const [currentOperand, setCurrentOperand] = useState("");
    const [previousOperand, setPreviousOperand] = useState("");
    const [operation, setOperation] = useState(null);

    const appendNumber = (number) => { 
        setCurrentOperand(currentOperand + number);
    }

    function chooseOperation(op) {
        switch (operation) {
            case "divide":
                
                break;
            case "multiply":
            
            break;
            case "add":
            
            break;
            case "subtract":
            
            break;
        
            default:
                break;
        }
    }
    
    return (
        <>
            <div className="calc-container">
                <div className="output">
                    <div className="previous-operand">{previousOperand} {operation}</div>
                    <div className="current-operand">{currentOperand}</div>
                </div>
                <button className="span-two">AC</button>
                <button>DEL</button>
                <button onClick={chooseOperation("divide")}>÷</button>
                <button onClick={appendNumber("1")}>1</button>
                <button onClick={appendNumber("2")}>2</button>
                <button onClick={appendNumber("3")}>3</button>
                <button onClick={chooseOperation("multiply")}>*</button>
                <button onClick={appendNumber("4")}>4</button>
                <button onClick={appendNumber("5")}>5</button>
                <button onClick={appendNumber("6")}>6</button>
                <button onClick={chooseOperation("add")}>+</button>
                <button onClick={appendNumber("7")}>7</button>
                <button onClick={appendNumber("8")}>8</button>
                <button onClick={appendNumber("9")}>9</button>
                <button onClick={chooseOperation("subtract")}>-</button>
                <button onClick={appendNumber("0")}>0</button>
                <button className="span-two">=</button>
            </div>
    </>
    );
}