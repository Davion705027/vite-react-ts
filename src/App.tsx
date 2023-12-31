import { useState } from 'react'
import './App.css'
import { Button, Card } from 'antd'
import Login from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card>
        <Login></Login>  
      </Card>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
