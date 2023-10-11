import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(15);
  const Addvalue = () =>{
    if(counter<20){
    counter = counter + 1;
    setcounter(counter);
    }
  }
  const Removevalue = ()=>{
    if(counter>0){
    setcounter(counter - 1);
  }}
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={Addvalue}>Add Value{counter}</button><br/>
    <button onClick={Removevalue}>Remove Value{counter}</button>
    </>
  )
}
export default App