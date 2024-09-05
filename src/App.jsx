import { useState } from 'react'
import './styles/App.css'
import './styles/index.css'
import Header from "./components/Header.jsx";
import { Form } from './components/Form.jsx';
import { Cv } from './components/Cv.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='left'>
        <Header />
        <Form />
      </div>
      <div className="right">
        <Cv />
      </div>
    </>
  )
}

export default App
