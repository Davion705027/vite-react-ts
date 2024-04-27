import { useState } from "react";
import Header from "./modules/header";
import Content from "./modules/content";
import { DatePicker } from "antd";


const Home = ()=>{
    const [num,setNum] = useState(0);
    const [show,setShow] = useState(false);
    const components = [Content,Header];
    return <div>
        <h1>Home</h1>
        <p>{num}</p>
        <DatePicker></DatePicker>
        <button onClick={()=>setNum(num+1)}>+1</button>
        <button onClick={()=>setShow(!show)}>{show?'隐藏':'显示'}</button>

        {show? components.map((item,index)=>item()) : null}
    </div>
}

export default Home;