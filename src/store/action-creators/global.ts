import { GlobalAction, GlobalActionTypes } from "../../types/types";

export function setIsAuth(boolean: boolean): GlobalAction {
    return {type: GlobalActionTypes.SET_IS_AUTH_STATE, payload: boolean}
}

export function setIsBurgerActive(boolean: boolean): GlobalAction {
    return {type: GlobalActionTypes.SET_IS_BURGER_ACTIVE, payload: boolean}
}