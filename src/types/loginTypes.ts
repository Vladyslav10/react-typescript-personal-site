export interface LoginState {
    password:string,
    login:string,
    passwordError: boolean,
    loginError: boolean,
    showForm: boolean,
}

export enum LoginActionTypes {
    SET_PASSWORD = 'SET_PASSWORD',
    SET_LOGIN = 'SET_LOGIN',
    SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR',
    SET_LOGIN_ERROR = 'SET_LOGIN_ERROR',
    SET_SHOW_FORM = 'SET_SHOW_FORM'
}

interface SetPasswordAction {
    type: LoginActionTypes.SET_PASSWORD,
    payload: string
}

interface SetLoginAction {
    type: LoginActionTypes.SET_LOGIN,
    payload: string
}

interface SetLoginErrorAction {
    type: LoginActionTypes.SET_LOGIN_ERROR,
    payload: boolean
}

interface SetPasswordErrorAction {
    type: LoginActionTypes.SET_PASSWORD_ERROR,
    payload: boolean
}

interface SetShowFormAction {
    type: LoginActionTypes.SET_SHOW_FORM,
    payload: boolean
}

export type LoginAction = SetPasswordAction | SetLoginAction | SetLoginErrorAction | SetPasswordErrorAction | SetShowFormAction;