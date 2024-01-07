/** react-redux **/
// import { connect } from "react-redux";
import { stateReducer } from "../../../store";
import { countAction } from "../../../redux/actions/count";
import { connect } from "../../../redux/my-react-redux";

interface IProps {
    num:number;
    add:()=>void;
}
const Counter = (props:IProps) => {
    let {num,add} = props;
    return <div>
        <div> {num}</div>
        <button onClick={add}>加</button>
    </div>
}

export default connect(
    (state:stateReducer)=>state.counter,
    countAction,
)(Counter);