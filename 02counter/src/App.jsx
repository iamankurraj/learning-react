import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)
  let [message, setMessage]=useState("")

  const addValue=()=>{
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  const reduceValue = ()=>{
    if (counter > 0) {
      setCounter(counter - 1);
      setMessage('');
    }else{
      setMessage("Number cannot be less than 0")
    }
  }

  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={reduceValue}>Reduce Value</button>
      

    </>
  )
}

export default App
