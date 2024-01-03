import { useEffect, useState } from "react";
import store from "../../../redux/myredux"
console.log(store.getState());

const Counter:React.FC = () => {
    const state = store.getState()
    const [count,setCount] = useState(0)

    useEffect(()=>{
        store.subscribe(()=>{
            setCount(Math.random()); // 随机数 每次都会更新
            // setCount(count+1); // 只会触发一次更新 因为count只会赋值为1
        });
    },[])
    return <div>
        <div> {state.num}</div>
        <button onClick={()=>{
            store.dispatch({
            type:'ADD'
        })
        }}>加</button>
    </div>
}
export default Counter