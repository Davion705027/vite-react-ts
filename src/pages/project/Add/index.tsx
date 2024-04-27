import { Button, Input } from "antd";
import { Fragment, forwardRef, useImperativeHandle, useState } from "react"


export interface IAddProps {
    add: (item:ITodo)=>void
}
const Add = forwardRef((props:IAddProps,ref)=>{
    const [todo,setTodo] = useState<ITodo>({title:''});
    const handleAdd = ()=>{
        // console.log('handleAdd',todo);
        if(!todo.title)return;
        props.add(todo);
    }

    // 像父组件暴露方法
    useImperativeHandle(ref,()=>({
        handleAdd
    }))



    return (
        <div>
            <h1>添加</h1>
            <Input placeholder="Basic usage" value={todo.title} onChange={e=>setTodo({...todo,title:e.target.value})} />
            <Button type="primary" onClick={handleAdd} >add</Button>
        </div>
    )
})

export default Add;