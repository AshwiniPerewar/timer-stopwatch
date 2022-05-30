import React,{useState,useEffect} from 'react'

const Timer = () => {
    const[watch,setWatch]=useState(0);
    const[timerid,setTimerid]=useState("");
    const[toggle,setToggle]=useState(false);
    const start=()=>
    {
        setToggle(!toggle);
        if(toggle)
        {
       let id= setInterval(()=>{
           setWatch((prev)=>prev+1)
       },1000)
      setTimerid(id);
        }
    
    }
    const reset=()=>
    {
        clearInterval(timerid);
        setWatch(0);
        
    }
    const pause=()=>
    {
        clearInterval(timerid);
        // timerid.current=null;
    }

  return (
    <div>
        <input type="number" onChange={(e)=>{setWatch(Number(e.target.value))}}></input>
        <button>Submit</button>
        <div>{watch}</div>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Stop</button>
    <button onClick={reset}>Reset</button>
    
    </div>
  )
    
}

export default Timer