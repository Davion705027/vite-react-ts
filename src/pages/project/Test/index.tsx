import { useCallback, useEffect, useState,memo, useLayoutEffect } from 'react';

export interface ITestProps {
  num:number,
}
let x:any = null
function sleep(duration:number) {
  const current = Date.now();
  while (Date.now() - current < duration) {}
}
 function Test (props: ITestProps) {
  // console.log(props); // 每次都是新的props

  // function createObj () {
  //   return {a:1}
  // }
  // 不会执行effect的create
  const createObj = useCallback(()=> {
    return {a:1}
  },[])
  console.log('test 组件更新了');
  
  useEffect(()=>{
    console.log('test effect createObj');
  },[createObj])

  const [count, setCount] = useState(0);
  // useEffect(()=> {  
  //   if(count === 1){
  //     sleep(1000)
  //     setCount(2)
  //   }else if(count === 2){
  //     sleep(1000)
  //     setCount(30)
  //   }
  // },[count])
  useEffect(() => {
    if (count === 0) {
      setCount(10 + Math.random() * 200);
    }
  }, [count]);


  let [obj,setObj] = useState({a:1})
  let [str,setStr] = useState('')


  return (
    <div onClickCapture={(e)=>{
      console.log('onClickCapture',e.target);
      
    }}>
      {count}

      <form onSubmit={(e) =>{
         alert('提交表单！');
         e.preventDefault()
      }}>
        <input />
        <button>发送</button>
      </form>
    

      <div onClickCapture={(e)=>{
        console.log('onClickCapture inner2',e.target);
      }}>
        inner2
        <button onClick={(e)=>{
          // e.stopPropagation();
          console.log('inner',e.target);
          setCount(0)
      }}>点击</button>
      </div>

    <input type="text" onInput={(e)=>{
      setStr(e.target.value);
    }}/>
    <div >Test</div></div>
  );
}
export default memo(Test);

// 核心还是 当状态改变后 函数会重新执行 我们的声明都是新的地址
// usecallback
// 父组件如果传一个（）=>{}函数到子组件 如果父组件更新 子组件也会更新  useEffect也会执行
// useEffect如果监听的是一个函数

// todoList 传递给子组件 每次都会生成新的数组
// const todoList = useMemo(() => [{ id: 1, text: "Learn React" }], []);

// meno 包了之后 
// 当某个组件因为自己的内部状态发生变化而重渲染的时候，以它自己为根节点的组件子树上的所有子孙组件默认都会被迫进行重渲染。
// 即使，该子孙组件的 props 和 state 没有发生变化的变化。这种重渲染，我们是称之为「被迫的，不必要的重渲染」