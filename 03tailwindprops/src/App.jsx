import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl'>Coffee1</h1>
      <Card username="ankur" work="nothing"/>
      <h1 className='bg-green-600 text-black p-4 rounded-xl'>Coffee1</h1>
      <Card username= "Ankur" />
    </>
  )
}

export default App
