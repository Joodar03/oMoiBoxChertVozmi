import {combineReducers} from "redux";
import userReduce from "./user-reduce";

const reduce = combineReducers({
    user: userReduce
})
export default reduce;