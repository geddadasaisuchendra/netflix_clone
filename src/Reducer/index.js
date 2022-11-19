import { combineReducers } from "redux";
import inreducer from "../inreducer";
import shReducer from "./shReducer";

const reducer=combineReducers({
    shReducer:shReducer,
    inreducer:inreducer
})

export default reducer