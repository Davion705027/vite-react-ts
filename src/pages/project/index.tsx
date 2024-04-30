import { MutableRefObject, memo, useCallback, useEffect, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { getProject } from "../../api/project";
import { ProjectObject } from "../../api/interface/project";
import { Button, Card } from "antd";
import Add from "./Add";
import { List } from "./List/inedx";
import Test from "./Test";

const Project = ()=>{
    const [list,setList] = useState<ITodo[]>([])
    let [num,setNum] = useState(0)
    let [num2,setNum2] = useState(0)
    const getProjectList = async ()=>{
        // const res = await getProject();
        // const data = res.data;
        // setList(data);
    }
    console.log('父组件更新了');
    
    const inputEl = useRef(null);
    const handleInput = ()=>{
        // inputEl.current.focus();
        setNum(num+1)

        // num = num+1; // 状态没变化 函数需要重新执行 hooks会走到更新逻辑
        // console.log(num);
    }
    // 函数默认执行
    const memoName = useMemo(()=>{
        // console.log('memo');
        return num + '---';
    },[num])

    const addRef = useRef<HTMLDivElement>(null);
    const parentCallChild = ()=>{
        console.log(addRef);
        addRef.current.handleAdd();
    }

    const add = (item:ITodo)=>{
        setList([...list,item])
    }


    const useCalls = useCallback(()=>{
        setNum(num+1)
    },[])
    return <>
    {/* {text} */}
        <Test num={num}></Test>
        <Card className="project">

            project {num2}

            <input ref={inputEl} type="text" /> 
            <Button onClick={handleInput}>点击input num+1</Button>
            <Button onClick={()=>setNum2(num2+1)}>点击input num2 +1</Button>

            <Add ref={addRef} add={add}></Add>
            <List list={list}></List>


            <Button onClick={parentCallChild}>点击Add</Button>

           
        </Card>
    </>
}

export default Project;
