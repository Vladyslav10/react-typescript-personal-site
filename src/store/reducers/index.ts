import {combineReducers} from "redux";
import { globalReducer } from "./globalReducer";
import { loginReducer } from "./loginReducer";


export const rootReducer = combineReducers({
    global: globalReducer,
    login: loginReducer
})

export type RootState = ReturnType<typeof rootReducer>