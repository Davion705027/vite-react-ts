import { Fragment, useRef, useState } from 'react';
import { Itask } from '..';
import { Button, InputRef } from 'antd';

export interface ITaskListProps {
    tasks:Itask[],
    onDeleteTask:(index:number)=>void,
    onChangeTask:(task:Itask)=>void,
}

type show = {
    [key:number]:boolean
}
export default function TaskList ({tasks,onDeleteTask,onChangeTask}: ITaskListProps) {
  const [edit,setEdit] = useState<show>({});  

  return (
    <div >
        {tasks.map((task,index)=>{
            return <Task task={task} onDeleteTask={onDeleteTask} onChangeTask={onChangeTask}></Task>
        })
    }
    </div>
  );
}


export interface ITaskProps {
    task:Itask,
    onDeleteTask:(index:number)=>void,
    onChangeTask:(task:Itask)=>void,
}
function Task({task,onDeleteTask,onChangeTask}:ITaskProps){
    const [isEditing, setIsEditing] = useState(false);
    const refInput = useRef(null);
    let taskContent;
    
    let input = <input autoFocus ref={refInput} value={task.text} onChange={(e)=>{
        onChangeTask({
            ...task,
            text:e.target.value
        })
    }}></input>
    
    if(isEditing){
        taskContent = (
            <>
                {input}
                <Button type='primary' onClick={()=>{
                    setIsEditing(false)
                }}>保存</Button>
            </>
        )
    }else{
        taskContent = (
            <>
                {task.text}
                <Button type='primary' onClick={()=>{

                    
                    setIsEditing(true)
                    refInput.current?.focus();
                }}>编辑</Button>
            </>
        )
    }

    return <Fragment key={task.id}> <div style={{display:'flex',alignItems:'center'}}>
        { taskContent }
    <Button type='primary' onClick={()=>onDeleteTask(task.id)}>删除</Button>
    
</div> </Fragment>
}