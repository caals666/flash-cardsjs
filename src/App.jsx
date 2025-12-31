/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
  let [progress,setProgress]=useState(Math.round((5/20)*700));
  let [showA,setA]=useState(false);
  const qs = ["What is JavaScript?", "What are `let`, `const`, and `var`?", "What is the difference between `==` and `===`?", "What is `NaN`?", "What is `null`?", "What is `undefined`?", "What is a closure?", "What is an arrow function?", "What is the DOM?", "What is event bubbling?", "What is `this` in JavaScript?", "What is a callback function?", "What is a promise?", "What is `async/await`?", "What is hoisting?", "What is the spread operator (`...`)?", "What is destructuring?", "What is `localStorage`?", "What is JSON?", "What is `typeof` operator?"];
  const as = ["A scripting language for creating dynamic web content.", "`let` and `const` are block-scoped variable declarations; `var` is function-scoped.", "`==` compares values with type coercion; `===` compares both value and type.", "A special value meaning \"Not a Number,\" resulting from invalid math operations.", "An intentional absence of any object value.", "A variable that has been declared but not assigned a value.", "A function that retains access to its outer lexical scope, even when executed outside that scope.", "A concise syntax for writing functions, without its own `this` binding.", "Document Object Model: a tree representation of HTML that JavaScript can manipulate.", "When an event triggers on a child element and propagates up through its ancestors.", "A keyword referring to the execution context, often the object a function is called on.", "A function passed as an argument to another function, to be executed later.", "An object representing the eventual completion or failure of an asynchronous operation.", "Syntax to write asynchronous code that looks synchronous, built on promises.", "JavaScript's behavior of moving declarations to the top of their scope before execution.", "Expands iterables (like arrays) into individual elements.", "A syntax to extract values from arrays or properties from objects into variables.", "A web API to store key-value pairs in a browser with no expiration.", "JavaScript Object Notation, a lightweight data interchange format.", "Returns a string indicating the type of a value (e.g., `\"string\"`, `\"number\"`)."];
  const nextOpt=()=>{
    if(progress!=700){
      setProgress(progress=>progress+35);
      setA(false);
    }
  }
  const prevOpt=()=>{
    if(progress>35){
      setProgress(progress=>progress-35);
    }
  }
  return (
    <div className="w-full grid justify-center">
      <div className="w-[700px] mt-[100px]">
        <p className="text-3xl font-bold">Flash Cards</p>
        <div className="w-[700px] flex justify-between">
          <div className={`mt-[5px] rounded-lg bg-blue-500 text-right h-[40px]`} style={{width: `${progress}px`}}><h4 className="mt-1 mr-3 text-lg text-amber-50">{(progress/700*100).toFixed()}%</h4></div>
        </div>
        <div>
          <div className="w-[700px] h-[400px] bg-gray-100 mt-3 rounded-xl border-gray-400 border-2 flex justify-center p-6 items-center">
            <p className={`${showA==false?'font-bold text-4xl':'font-medium text-2xl'} text-center`}>{showA==false?qs[(progress/700*20)-1]:as[(progress/700*20)-1]}</p>
          </div>
          <div className="flex px-7 justify-between w-[700px] h-[60px] rounded-lg border-solid border-gray-400 border-2 bg-gray-100 mt-2">
            <button id="previousTab" onClick={prevOpt} className="text-xl">{`< Previous`}</button>
            <button id="showAns" onClick={()=>showA==false?setA(true):setA(false)} className="text-xl font-medium">{showA?"Hide Answer":"Show Answer"}</button>
            <button id="nextTab" onClick={nextOpt} className="text-xl">{`Next >`}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
