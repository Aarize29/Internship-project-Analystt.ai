import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
     <Card/>
    
    </div>
  )
}

export default App
