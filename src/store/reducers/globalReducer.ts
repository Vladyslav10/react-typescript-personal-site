import { GlobalState, GlobalActionTypes, GlobalAction } from "../../types/types";

const initialState:GlobalState  = {
    isAuth: true,
    isBurgerActive: false
}

export const globalReducer = (state = initialState, action: GlobalAction):GlobalState  => {
    switch (action.type) {
        case GlobalActionTypes.SET_IS_AUTH_STATE:
            return {...state, isAuth: action.payload}
        case GlobalActionTypes.SET_IS_BURGER_ACTIVE:
            return {...state, isBurgerActive: action.payload}
        default:
            return state
    }
}
