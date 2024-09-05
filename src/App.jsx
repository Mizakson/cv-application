// import { useState } from 'react'
import './styles/App.css'
import './styles/index.css'
import Description from './components/Description'
import Form from './components/Form'
import Cv from './components/Cv'

function App() {

  // const [isActive, setIsActive] = useState()

  function handleSubmit(e) {
      e.preventDefault()
      document.querySelector("form").classList.toggle("covered")
      document.querySelector(".display").classList.toggle("covered")
  }

  function handleClick(e) { 
      e.preventDefault()
      document.querySelector("form").classList.toggle("covered")
      document.querySelector(".display").classList.toggle("covered")
  }



  return (
    <>
      <Description />
      <div className="wrapper">
        <Form onSubmit={handleSubmit}/>
        <Cv onClick={handleClick}/>
      </div>
    </>
  )
}

export default App
