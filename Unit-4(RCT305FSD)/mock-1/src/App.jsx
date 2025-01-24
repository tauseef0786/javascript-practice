import { useState } from 'react'

import Product from './Components/Product'
import Router from './Routes/Router'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Router/>
      {/* footer */}
    </>
  )
}

export default App
