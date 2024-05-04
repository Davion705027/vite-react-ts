import * as React from 'react';
import AddTask from './addTask';
import { useReducer } from 'react';
import { Card } from 'antd';
import TaskList from './taskList';

export interface ITaskProps {
}

export default function Task (props: ITaskProps) {
    const [tasks,dispatch] = useReducer(tasksReducer,initialTasks)
    function handleAddTask(text:string){
        dispatch({type:'ADD_TASK',id:nextId++,text})
    }
    function handleDeleteTask(taskId:number){
        dispatch({type:'DELETE_TASK',id:taskId})
    }
  return (
    <Card>
        <AddTask onAdd={handleAddTask}></AddTask>
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}></TaskList>
    </Card>
  );
}

type actionType = 'ADD_TASK' | 'DELETE_TASK'
interface ActionType {
    type: actionType,
    id:number,
    text?:string
}

function tasksReducer(tasks:Itask[],action:ActionType){
    console.log('reducer',tasks,action);
    
    switch(action.type){
        case 'ADD_TASK':
            return [...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false
                  }
            ]
        case 'DELETE_TASK':
            return tasks.filter(task=>task.id!==action.id)
        default:
            return tasks
    }
}
export interface Itask  {
    id:number,
    text:string,
    done:boolean
}
let nextId = 3;
const initialTasks:Itask[] = [
  { id: 0, text: '参观卡夫卡博物馆', done: true },
  { id: 1, text: '看木偶戏', done: false },
  { id: 2, text: '列侬墙图片', done: false }
];