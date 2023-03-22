export interface RouteInterface {
    path: string,
    component: React.FC
}

export interface GlobalState {
    isAuth: boolean,
    isBurgerActive: boolean,
}

export enum GlobalActionTypes {
    SET_IS_AUTH_STATE = 'SET_IS_AUTH_STATE',
    SET_IS_BURGER_ACTIVE = 'SET_IS_BURGER_ACTIVE'
}

interface SetIsAuthAction {
    type: GlobalActionTypes.SET_IS_AUTH_STATE,
    payload: boolean
}

interface SetIsBurgerActiveAction {
    type: GlobalActionTypes.SET_IS_BURGER_ACTIVE,
    payload: boolean
}

export type GlobalAction = SetIsAuthAction | SetIsBurgerActiveAction;