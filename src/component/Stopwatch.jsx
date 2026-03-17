import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
    const [incNum, setIncNum] = useState(0)
    const [run, setRun] = useState(true)
    const countref = useRef(null)

    const startstop = ()=>{

    if(run){
 countref.current = setInterval(() => {     
        setIncNum((prev)=> prev + 1)
    }, 1000);
    setRun(false)
    }   
 if(!run){
clearInterval(countref.current)
setRun(true)
 }
    }
     const reset = ()=>{
setIncNum(0)
    }

  return (
    <div> 
        <input type='text' value={incNum} readOnly />
        <br/>
        <button type='button' onClick={startstop}>{run ? 'Start' : 'Stop'}</button>
        <button type='button' onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch