import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Main from './component/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <Main></Main>
    </>
  )
}

export default App
