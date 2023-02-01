import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1 className="font-extrabold text-[#ea580c] text-[32px]">
      Hello world!
    </h1>
    </div>
  )
}

export default App
