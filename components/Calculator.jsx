import "../src/reset.css"
import "../src/style.css"
import { useState } from "react";

export default function Calculator() {
    const [currentOperand, setCurrentOperand] = useState("");
    const [previousOperand, setPreviousOperand] = useState("");
    const [operation, setOperation] = useState(null);
    
    return (
        <>
            <div className="calc-container">
                <div className="output">
                    <div className="previous-operand">{previousOperand} {operation}</div>
                    <div className="current-operand">{currentOperand}</div>
                </div>
                <button className="span-two">AC</button>
                <button>DEL</button>
                <button>÷</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>*</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
                <button>.</button>
                <button>0</button>
                <button className="span-two">=</button>
            </div>
    </>
    );
}