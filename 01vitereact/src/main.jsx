import { StrictMode } from 'react'  //named import - { StrictMode }
import { createRoot } from 'react-dom/client'
import './index.css'

import Appssss from './App.jsx'   // when we import the single (Appssss) component we can also use any name than a function name like function name is App but we using Appssss



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Appssss />
    <Myapp />
    {/* component is a reusable piece of UI */}
    {/* here we using same component multiple times */}
    <Myapp />
    <Myapp />
    <Myapp />
    <Myapp />
    </>
  </StrictMode>,
)

//named import
import { Myapp } from './App.jsx'   //even we import this after use it, vite parse this file and move this statement at the top level , we cant see it in this file but in transformed code it can be moved at the top level