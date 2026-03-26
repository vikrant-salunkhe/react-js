import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);   
  const [numberUse, setNumberUse] = useState(false);
  const [charUse, setCharUse] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz"
    if (numberUse) str += "1234567890"
    if (charUse) str += "~!@#$%^&*()_{}|"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberUse, charUse, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }, [password])



  useEffect(() => {
    passwordGenerator()
  }
  , [length, numberUse, charUse, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white shrink-0 px-3 py-1 cursor-pointer transition active:scale-95
               active:opacity-70'
          
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numberUse}
              id="numberInput"
              onChange={() => {
                setNumberUse((prev) => !prev);
              }} 
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charUse}
              id="charInput"
              onChange={() => {
                setCharUse((prev) => !prev);
              }} 
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
