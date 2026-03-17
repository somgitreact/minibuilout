import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
    const [incNum, setIncNum] = useState({min:0,sec:0})
    
    const [run, setRun] = useState(true)
    const countref = useRef(null)

    const startstop = ()=>{
    if(run){
 countref.current = setInterval(() => {     
        setIncNum((prev)=>({...prev, sec: prev.sec + 1}))
        
    }, 1000);
    setRun(false)
    }   
 if(!run){
clearInterval(countref.current)
setRun(true)
 }
    }
     const reset = ()=>{
setIncNum({min:0,sec:0})
    }
    useEffect(()=>{
        function setmin(){
        if(incNum.sec > 60){
             setIncNum((prev)=>({...prev, min: prev.min + 1}))
             setIncNum((prev)=>({...prev, sec: 0}))
             
        }    
        }
setmin()
    },[incNum])

  return (
    <div> 
        <h2>Stop Watch</h2>
        <p>Time: {incNum.min} : {incNum.sec}</p>
        <br/>
        <button type='button' onClick={startstop}>{run ? 'Start' : 'Stop'}</button>
        <button type='button' onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch