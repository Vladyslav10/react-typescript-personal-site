import {combineReducers} from "redux";
import { globalReducer } from "./globalReducer";


export const rootReducer = combineReducers({
    global: globalReducer,
})

export type RootState = ReturnType<typeof rootReducer>