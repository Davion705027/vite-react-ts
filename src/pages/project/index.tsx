import { MutableRefObject, useEffect, useRef, useState } from "react";
import { getProject } from "../../api/project";
import { ProjectObject } from "../../api/interface/project";
import { Button, Card } from "antd";
import Add from "./Add";
import { List } from "./List/inedx";

const Project = ()=>{
    const [list,setList] = useState<ITodo[]>([])
    const getProjectList = async ()=>{
        // const res = await getProject();
        // const data = res.data;
        // setList(data);
    }
    const inputEl = useRef(null);
    const handleInput = ()=>{
        inputEl.current.focus();
    }

    const addRef = useRef<HTMLDivElement>(null);
    const parentCallChild = ()=>{
        console.log(addRef);
        addRef.current.handleAdd();
    }

    const add = (item:ITodo)=>{
        setList([...list,item])
    }

    useEffect(()=>{
        getProjectList()
    },[])
    return <>
        <Card className="project">
            project
            <input ref={inputEl} type="text" />
            <Button onClick={handleInput}>点击input</Button>

            <Add ref={addRef} add={add}></Add>
            <List list={list}></List>


            <Button onClick={parentCallChild}>点击Add</Button>

           
        </Card>
    </>
}

export default Project;