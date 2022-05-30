import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Timer from './components/Timer';
import Stopwatch from './components/stopwatch';
function App() {
  const[time,setTime]=useState([]);
  const[showComponent,setShowComponent]=useState(false);
  return (
    <div className="App">
        <button onClick={()=>setShowComponent(!showComponent)}>{showComponent?"Timer":"Stopwatch"}</button>

     {showComponent?<Timer/>:<Stopwatch/>}
      
    </div>
  );
}

export default App;
