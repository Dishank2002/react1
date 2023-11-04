import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [counter,setcounter] = useState(5)
//  let counter = 5

 const addValue = () => {
  // counter = counter + 1;
  if(counter < 20)
  setcounter(counter+1)
 }

const reduceValue = () =>{
  if(counter>0)
  setcounter(counter-1)
}
  return (
    <>
    <h1>React</h1>
    <h2>Counter Value : {counter}</h2>
    <button 
    onClick={addValue}
    >Add {counter}</button>
    <br />
    <button 
    onClick={reduceValue}
    >remove {counter}</button>

    </>
  )
}

export default App
