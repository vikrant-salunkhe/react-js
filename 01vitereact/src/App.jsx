//one component
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default App   // we can write this export default statement any where in the code even inside other functon also but not write in conditional statements

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more ❤️😂😘
      </p>
    </>
  )
}


//App01 to check can we export multiple default apps
function App01(){
  return(
    <div>
      hiiiii in app01
    </div>
  )
}

// export default App01  - a module can not have multipe default exports

//named export
//file can have more than one named exports (but only one default export)
//while importing named exports we must write function name as it is inside the {} braces
export function Myapp(){
  return (
    <>
      <h1>MY app</h1>
      {/* component inside another comp */}
      <App01/>
      <App01/>
    </>
    
  )
}


