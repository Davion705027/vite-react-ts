import { useState } from 'react'
import './App.css'
import { Button, Card } from 'antd'
import Login from './pages/login'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/features/counterSlice'

function App() {
  const [count, setCount] = useState(0)

   // 通过useSelector直接拿到store中定义的value
   const {value} = useSelector((store:any)=>store.counter)
   // 通过useDispatch 派发事件
   const dispatch = useDispatch()

  return (
    <>
      <Card>
        <Login></Login>  
      </Card>
        <p>{value}</p>
        <input value={count} onChange={(e)=>setCount(+e.target.value)}></input>
        <button onClick={()=>{dispatch(increment({value: count}))}}>加</button>
        <button onClick={()=>{dispatch(decrement())}}>减</button>
    </>
  )
}

export default App
