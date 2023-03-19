import { GlobalState, GlobalActionTypes, GlobalAction } from "../../types/types";

const initialState:GlobalState  = {
    isAuth: false
}

export const globalReducer = (state = initialState, action: GlobalAction):GlobalState  => {
    switch (action.type) {
        case GlobalActionTypes.SET_IS_AUTH_STATE:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
}
