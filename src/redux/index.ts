import { createStore,combineReducers } from "redux";
// import userReducer from "./reducers/user";
// import counterReducer from "./reducers/count";
import { counterReducer, userReducer } from './reducers'
const reducer = combineReducers({
    user: userReducer,
    counter: counterReducer
})
// const state = {
//     num:1
// }
// const reducer = function reducer(initialState = state,action:any){
//     console.log(initialState);
    
//     switch(action.type){
//         case 'ADD':
//             return {
//                 ...initialState,
//                 num:initialState.num + 1
//             }
//         default:
//             return initialState;
//     }
// }
const store = createStore(reducer);

export default store;