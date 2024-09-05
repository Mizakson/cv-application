// import { useState } from 'react'
import './styles/App.css'
import './styles/index.css'
import Description from './components/Description'
import Form from './components/Form'

function App() {
  
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Description />
      <div className="wrapper">
        <Form />
      </div>
    </>
  )
}

export default App
