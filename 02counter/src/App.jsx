import { useState } from 'react' //useState is a React Hook that lets you add a state variable to your component.
import './App.css'



function App() {
  //Syntax -> const [state, setState] = useState(initialValue);
  //useState allows to store and update the data that affects the UI.
  //Call useState at the top level of your component to declare a state variable.
  //The convention is to name state variables like [something, setSomething] using array destructuring.
  //useState is a Hook, so you can only call it at the top level of your component or your own Hooks. 
  //You can’t call it inside loops or conditions. 
  const [count, setCount] = useState(0)

  //useState returns an array with exactly two values:
  //-The current state. During the first render, it will match the initialState you have passed.
  //-The set function that lets you update the state to a different value and trigger a re-render.

  //The set function returned by useState lets you update the state to a different value and trigger a re-render.  
  //You can pass the next state directly, or a function that calculates it from the previous state
  return (
    <>
      <h1>Counter</h1>
      <p>Count is {count}</p>
      <div>
        <button onClick={ () => setCount((count) => {
          if (count < 20) {
            return count + 1
          }
          return count

        })}>
          Increase
        </button>

        <button onClick={ () => setCount((count) => {
          if (count > 0) {
            return count - 1
          }
          return count
        })} >
          Decrease
        </button>
      </div>
    </>
  )
}

export default App



/*
//Optimised code-----------------------------------------------------------
// Prevents function recreation on every render
// Useful when passing function to child components
/**
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {      //Prevents function recreation on every render
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrease = () => {      //Prevents function recreation on every render
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1> Count is {count}</h1>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </div>
  );
}

export default App;

 */



//# task of state lifting 
// function App(){
//   const [count , setCount] = useState(0);

//   return(
//     <>
//     <p>{count}</p>
//     <button onClick={() => setCount( (prev) => prev + 1 )}>Count</button>
//     </>
//   )

// }

// export default App;
