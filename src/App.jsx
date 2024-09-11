// import { useState } from 'react'
import './styles/App.css'
import './styles/index.css'
import Description from './components/Description'
import Form from './components/Form'
import Cv from './components/Cv'

function App() {

  // const [isActive, setIsActive] = useState()



  return (
    <>
      <Description />
      <div className="display">
      <Form />
      <Cv />
      </div>

    </>
  )
}

export default App
