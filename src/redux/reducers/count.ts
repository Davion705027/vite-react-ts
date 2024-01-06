const state = {
    num:1
}
const counterReducer = function reducer(initialState = state,action:any){
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

export default counterReducer;