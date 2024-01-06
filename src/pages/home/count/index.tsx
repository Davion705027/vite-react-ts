import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { stateReducer } from "../../../store";

const Counter:React.FC = (props) => {
    console.log(props);
    
    const [count,setCount] = useState(0)
    return <div>
        123
        {/* <div> {state.num}</div>
        <button onClick={()=>{
            store.dispatch({
                type:'ADD'
            })
        }}>加</button> */}
    </div>
}

export default connect(
    (state:stateReducer)=>{
        // console.log(state);
        return state.counter;
    },
    (dispatch)=>{
        return 1;
    },
)(Counter);