// import { useState } from 'react'
import './styles/App.css'
import './styles/index.css'
import Description from './components/Description'

function App() {
  
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="left">
      <Description />
      </div>
      <div className="right"></div>
    </>
  )
}

export default App
