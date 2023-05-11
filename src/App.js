import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const [count,setCounter]=useState(0)

  const [show,setShow]=useState('')

  useEffect(()=>{
    console.log("useEffect is running")},[count])
  
function increment(){
  setCounter(count+1)
}
function decrement(){
  setCounter(count-1)
}
  
  return (
    <div>
      <h1>Assignment:Create a simple Counter</h1>
      <p>{show}</p>
      <h3>Counter:{count}</h3>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
    </div>
  );
}
