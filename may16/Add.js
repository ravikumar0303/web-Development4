// write a AddComponent that takes two numbers in PROPS . The component will show 
// the addition .
// Let AddComponent be a functional component .
// -The function component is CALLED by the REACT container .If there are any props 
// those are passed as
// Parameters to the function by the REACT container .
import { useState } from "react"
export default function Add() {
  let [Add,setSum] = useState(-1)
  let v = 0
  let w = 0
  let sum = 0
  function Addition(e) {
    v = parseInt(e.target.value)
    // w = f. target.value
  }
  function Addition1(e) {
    w = parseInt(e.target.value)
    // w = f. target.value
  }

  function p1() {
    sum =v + w
    setSum(sum)
  }
  console.log(sum)
  return <div>
    <input type="number1" onBlur={Addition} />
     <input type="number2" onBlur={Addition1} /> 

    <button onClick={p1} type="button">sum </button>
    <p id="p1">addition= {Add}</p>

  </div>


}