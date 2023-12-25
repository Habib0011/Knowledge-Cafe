import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import QAns from './component/QAns/QAns'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <Main></Main>
     <QAns></QAns>
    </>
  )
}

export default App
