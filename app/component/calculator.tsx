'use client'
import { evaluate } from "mathjs";
import { useState } from "react";


function Calculator (){
     

    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | string>(0);


    const handleClick = (value:string)=>{
          setInput((prev) => prev+value)
    };

    const handleClear = ()=>{
        setInput('')
        setResult(0)
    };

    const calcResult = () => {
        try{
            const evaluatedResult = evaluate(input);
            setResult(evaluatedResult)
        }
        catch(error){
            setResult('Invalid digit error')
        }
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h5 className='text-gray-500 mb-6'>Calculator is Developed By Hammad</h5>
          <div className="bg-white p-6 rounded shadow-md max-w-xs w-full">
            <h2 className="text-xl font-bold mb-4">Simple Calculator</h2>
            <input
              type="text"
              value={input}
              readOnly
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="grid grid-cols-4 gap-2 mb-4">
      {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
        <button
          key={btn}
          onClick={() => (btn === '=' ? calcResult() : handleClick(btn))}
          className={`p-2 text-white rounded hover:bg-opacity-80 
            ${btn === '+' || btn === '-' || btn === '*' || btn === '/' || btn === '.' || btn === '=' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {btn}
        </button>
      ))}
    </div>
    
            <button
              onClick={handleClear}
              className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Clear
            </button>
            <div className="mt-4 text-lg font-bold">Result: {result}</div>
          </div>
        </div>
      );
    };
    
    export default Calculator;
    