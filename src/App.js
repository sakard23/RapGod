import './App.css';
import {useState} from 'react';


function App(){
  const [count, setcount] = useState(0);
  return (
    <div className="App">
      <para>You clicked RapBattle {count} times.
      </para> 
      <button onClick={()=>setcount(count+1)}
       > RapBattle </button>
    
    </div>
  )
}

export default App;
