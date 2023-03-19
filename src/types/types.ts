export interface RouteInterface {
    path: string,
    component: React.FC
}

export interface GlobalState {
    isAuth: boolean;
}

export enum GlobalActionTypes {
    SET_IS_AUTH_STATE = 'SET_IS_AUTH_STATE'
}

interface SetIsAuthAction {
    type: GlobalActionTypes.SET_IS_AUTH_STATE,
    payload: boolean
}

export type GlobalAction = SetIsAuthAction;