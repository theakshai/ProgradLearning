import React, { useState } from "react";
import Button from "../components/Button";

let Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(0);

  const addition = () => {
    setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
  };

  const subtraction = () => {
    setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
  };

  const multiplication = () => {
    setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
  };

  const division = () => {
    setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
  };

  return (
    <div className="h-44 w-80 absolute bg-cyan-900 rounded-2xl top-48 left-96 ml-12">
      <div className="flex justify-center">
        <input
          className="h-10 w-10 m-4 rounded-sm outline-none text-center bg-cyan-800 text-white"
          type="number"
          value={firstNumber}
          onChange={(event) => setFirstNumber(event.target.value)}
        />
        <input
          className="h-10 w-10 m-4 rounded-sm outline-none text-center bg-cyan-800 text-white"
          type="number"
          value={secondNumber}
          onChange={(event) => setSecondNumber(event.target.value)}
        />
        <input
          className="h-10 w-10 m-4 rounded-sm outline-none text-center bg-cyan-800 text-white"
          readOnly
          value={result}
        />
      </div>
      <div className="flex justify-center">
        <Button onClick={addition}>Add</Button>
        <Button onClick={subtraction}>Sub</Button>
        <Button onClick={multiplication}>Mul</Button>
        <Button onClick={division}>Div</Button>
      </div>
    </div>
  );
};

export default Calculator;
