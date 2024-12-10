import React,{useReducer} from 'react';

const intialState={count:1,showCounter:true};


const reducer=(state,action)=>{
   switch (action.type) {
    case "INC":
        return {...state,count:state.count+1}
    case "DEC":
        return {...state,count:state.count-1};
    case "RESET":
        return {...state,count:intialState.count}
    case "TOGGLE":
        return {...state,showCounter:!state.showCounter}
    default:
        throw new Error('Unknown action type');
   }
};

const ReducerCounter = () => {

    const [state,dispatch]=useReducer(reducer,intialState);

  return (
    <div style={{justifyContent:"center",alignItems:"center"}}>
        <h1>ReducerCounter</h1>
        {state.showCounter&&<h2>{state.count}</h2>}

        <div style={{display:"flex",justifyContent:"center",gap:10}}>

            <button onClick={()=>dispatch({type:"INC"})}>
                Increase
            </button>

            <button onClick={()=>dispatch({type:"DEC"})}>
                Decrease
            </button>

            <button onClick={()=>dispatch({type:"RESET"})}>
                Reset
            </button>

            <button onClick={()=>dispatch({type:"TOGGLE"})}>
                Toggle Counter
            </button>
        </div>
    </div>
  )
}

export default ReducerCounter;