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
        catch{
            setResult('Error')
        }
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h5 className='text-gray-500 mb-6'>Calculator is Developed By Hammad</h5>
          <div className="bg-gray-200 p-5 rounded shadow-xl border border-gray-500 border-t-2 border-teal-500 max-w-xs w-full">
            <h2 className="text-xl font-bold mb-4">Simple Calculator</h2>
            <div className="mt-4 text-lg font-bold bg-slate-300">Result: {result}</div>
            <input
              type="text"
              value={input}
              readOnly
              className="w-full p-4 mb-4 border border-gray-300 rounded"
            />
            <div className="grid grid-cols-4 gap-2 mb-4">
      {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
        <button
          key={btn}
          onClick={() => (btn === '=' ? calcResult() : handleClick(btn))}
          className={`p-2 text-white rounded-xl hover:bg-opacity-80 
            ${btn === '+' || btn === '-' || btn === '*' || btn === '/' || btn === '.' || btn === '=' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {btn}
        </button>
      ))}
    </div>
    
            <button
              onClick={handleClear}
              className="w-full p-4 bg-green-500 text-white rounded-xl hover:bg-green-700 font-bold"
            >
              Clear
            </button>
            
          </div>
        </div>
      );
    };
    
    export default Calculator;
    