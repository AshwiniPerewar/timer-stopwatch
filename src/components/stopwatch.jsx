import React,{useEffect,useState} from 'react'

const Stopwatch = () => {

  const[timer,setTimer]=useState(0);
  const[mili,setMili]=useState(0);
const[timerid,setTimerid]=useState("");
const[miliid,setMiliid]=useState("");
  

const start=()=>
  {
    if(timer==0 && mili==0)
    {
      const id=setInterval(()=>{
          
          setTimer((timer)=>timer+1);
          
      },1000)
    setTimerid(id);
    
    const id1=setInterval(()=>{
          if(mili==100)
          {
            clearInterval(id1);
            setMili(0);
          }
          else
          {
          setMili((mili)=>mili+1);
          }
          
      },10)
      setMiliid(id1);
     
  }
}

const stop=()=>
{
  clearInterval(timerid);
  clearInterval(miliid);
}

const reset=()=>
{
 
  clearInterval(timerid);
  clearInterval(miliid);
  setTimer(0);
  setMili(0);

}
return (
  <div><div>Time: {timer}:{mili}</div>
  <button onClick={start}>Start</button>
  <button onClick={stop}>Stop</button>
  <button onClick={reset}>Reset</button>
  </div>
)
}

export default Stopwatch