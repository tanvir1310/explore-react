import { useState } from "react"
//change hoite pare amn kisu controle korte useState use hoy
export default function Counter(){
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  }

  return(
    <div style={{border: '2px solid Yellow', margin: '20px', padding: '20px', borderRadius: '20px'}}>
      <h2>useState</h2>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
    
  )
}