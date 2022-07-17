import { useState } from 'react';
import './App.css';
import styled from "styled-components"
import InputBtns from './InputBtns.jsx'

function App() {
  const [input, setInput] = useState("125");
  const [output, setOutput] = useState("22");
  function clearDisplay() {
    // console.log("you want to clear the display")
    setInput("");
    setOutput("");
  }
  function deleteDigit() {
    // console.log("deleting the digit", input)
    setInput((a) => a.slice(0, a.length - 1))
  }
  function giveResult() {
    // console.log("wait, giving result")
    try {
      // eval calculates mathematical expression from string
      const temp = eval(input)
      setOutput(temp)
    } catch (error) {
      alert("Error!! Please behave like an Educated Man")
      setInput("")
    }
  }
  function inputBtn(input) {
    // takes input from user and add to input state variable
    setInput((i) => i + input)
  }
  // all input buttons for calculator
  const inputs=[{value:"Clear",onClick:clearDisplay},{value:"Delete",onClick:deleteDigit},{value:".",onClick:() => inputBtn(".")}
  ,{value:"/",onClick:() => inputBtn("/")},{value:"7",onClick:() => inputBtn("7")},{value:"8",onClick:() => inputBtn("8")}
  ,{value:"9",onClick:() => inputBtn("9")},{value:"*",onClick:() => inputBtn("*")},{value:"4",onClick:() => inputBtn("4")}
  ,{value:"5",onClick:() => inputBtn("5")},{value:"6",onClick:() => inputBtn("6")},{value:"-",onClick:() => inputBtn("-")}
  ,{value:"1",onClick:() => inputBtn("1")},{value:"2",onClick:() => inputBtn("2")},{value:"3",onClick:() => inputBtn("3")}
  ,{value:"+",onClick:() => inputBtn("+")},{value:"History",onClick:()=>alert("History will be implemented soon!")},{value:"0",onClick:() => inputBtn("0")},{value:"=",onClick:giveResult}
  ]
  return (
    <div className="App">
      <AppHeader>
        My Amazing CalC
      </AppHeader>
      <DisplayArea>
        <Display id='input'>
          {input}
        </Display>
        <Display id='output'>
          {output}
        </Display>
      </DisplayArea>

      <InputArea>
      {/* shows all input buttons */}
         {inputs.map((input)=>{
          // {console.log(input)}
          return <InputBtns key={input.value} value={input.value} onClick={input.onClick}/>
        })}
      </InputArea>
    </div>
  );
}

const AppHeader = styled.header`
  padding: 1rem;
  border: 2px solid black;
  text-align: center;
  font-size: 2.5rem;
  color: #4caf50;
`
const DisplayArea = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  font-size: 3rem;
  align-items: end;
`
const Display = styled.div`
padding: 1rem;
overflow: auto;
max-width: 100%;
`
const InputArea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
font-size: 2rem;
`


export default App;
