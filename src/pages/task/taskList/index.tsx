import { Fragment, useState } from 'react';
import { Itask } from '..';
import { Button } from 'antd';

export interface ITaskListProps {
    tasks:Itask[],
    onDeleteTask:(index:number)=>void,
}

type show = {
    [key:number]:boolean
}
export default function TaskList ({tasks,onDeleteTask,}: ITaskListProps) {
  const [edit,setEdit] = useState<show>({});  

  const handleEdit = (index:number)=>{
    // edit[index] = true;
    setEdit({
        ...edit,
        [index]:true
    })
  }
  return (
    <div >
        {tasks.map((task,index)=>{
            return <Fragment key={task.id}> <div style={{display:'flex',alignItems:'center'}}  key={index}>
                { edit[task.id] ? <input value={task.text}></input> : task.text}
                <Button type='primary' onClick={()=>handleEdit(task.id)}>编辑</Button>
                <Button type='primary' onClick={()=>onDeleteTask(task.id)}>删除</Button>
                
            </div> </Fragment>
        })
    }
    </div>
  );
}
