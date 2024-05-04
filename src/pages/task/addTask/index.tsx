import { Space } from 'antd';
import * as React from 'react';
import { useRef } from 'react';

export interface IAddTaskProps {
    onAdd: (v:string) => void
}

export default function AddTask ({onAdd}: IAddTaskProps) {
    const r = useRef(null)
    const handleAdd = ()=>{
        let v = r.current.value;
        
        onAdd(v);
    } 
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <input type="text" placeholder="Add task" ref={r}/>
      <Space ></Space>
      <button onClick={handleAdd}>添加</button>
    </div>
  );
}
