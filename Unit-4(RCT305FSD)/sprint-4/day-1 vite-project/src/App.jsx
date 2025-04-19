import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountN } from './components/Count'
// import { Container } from './components/container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Container/> */}
     <CountN/>
    </>
  )
}

export default App
