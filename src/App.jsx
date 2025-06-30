import { useState } from 'react'
import Pattern from "./patterns/Pattern"
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pattern />
    </>
  )
}

export default App
