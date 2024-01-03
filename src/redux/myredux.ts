interface actionType {
    type:string,
    payload?:any
}
export const createStore = function createStore(reducer:Function){
    if(typeof reducer !== 'function'){
        throw new Error('reducer must be a function');
    }

    let state:any = null;
    let listeners:Set<any> = new Set();

    // 获取状态
    const getState = ()=> state

    // 放到事件池
    const subscribe = (listener:Function)=>{
        if(typeof listener !== 'function'){
            throw new Error('listener must be a function');
        }
        listeners.add(listener);

        const unSubscribe = ()=>{
            listeners.delete(listener);
        }
        return unSubscribe;
    }

    // 派发任务
    const dispatch = (action:actionType)=>{
        if(!action.type)throw TypeError('type 必传')
        state = reducer(state,action);    
        listeners.forEach(listener=>listener());
    }

    dispatch({type:'@@REDUX/INIT'});

    return {
        getState,
        subscribe,
        dispatch
    }
}


const state = {
    num:1
}
function reducer(initialState:any = state,action:any){
    initialState ||= state
    
    switch(action.type){
        case 'ADD':
            return {
                ...initialState,
                num:initialState.num + 1
            }
        default:
            return initialState;
    }
}
const store = createStore(reducer);

export default store;