const state = {
    age:''
}
const userReducer = function reducer(initialState = state,action:any){
    console.log(initialState);
    
    switch(action.type){
        case 'SET_NAME':
            return {
                ...initialState,
                name:initialState.age + 1
            }
        default:
            return initialState;
    }
}
export default userReducer;