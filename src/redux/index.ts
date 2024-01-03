import { createStore } from "redux";

const state = {
    num:1
}
const reducer = function reducer(initialState = state,action:any){
    console.log(initialState);
    
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