import {combineReducers } from "redux";
import authReducer from "./authReducer";
import streamsReducers from "./streamsReducer"
import { reducer as formReducer} from "redux-form";

export default combineReducers({
    auth: authReducer,
    streams: streamsReducers,
    form: formReducer
})