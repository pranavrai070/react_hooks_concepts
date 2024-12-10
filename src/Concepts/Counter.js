import React,{useState} from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);


  return (
    <div style={{display:'felx',justifyContent:"center",alignContent:"center"}}>
      <h2>Counter using useState</h2>
      <h3>{count}</h3>

      <div style={{display:"flex",gap:4,margin:4,justifyContent:"center"}}>
        <button onClick={()=>setCount(prev=>prev+1)}>
           Increase
        </button>
        <button onClick={()=>setCount(prev=>prev-1)}>
           Decrease
        </button>
      </div>

    </div>
    
  )
}

export default Counter;