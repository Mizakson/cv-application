import { useState } from 'react'
import './styles/App.css'
import './styles/index.css'
import Header from "./components/Header.jsx";
import { Form } from './components/Form.jsx';
import { Cv } from './components/Cv.jsx';

function App() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className='left'>
        <Header />
        <Form isActive={setActiveIndex === 0}
        onClick={console.log(`active: ${activeIndex}`)}
        />
      </div>
      <div className="right">
        <Cv isActive={setActiveIndex === 1}
        onClick={console.log(`active: ${activeIndex}`)}
        />
      </div>
    </>
  )
}

export default App
