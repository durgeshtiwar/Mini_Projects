import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="bg-green-900 text-black rounded-xl p-4 mb-4">Tailwind test in vite</h1>
    <Card username = "chai aur code" btntext = "Click Me ->"/>
    <Card username = "Hitesh Chaudhary" btntext = "Visit Me ->"/>
    </>
  )
}

export default App
