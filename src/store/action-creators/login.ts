import { LoginAction, LoginActionTypes } from "../../types/loginTypes";

export function setPasswordError(boolean: boolean): LoginAction {
    return {type: LoginActionTypes.SET_PASSWORD_ERROR, payload: boolean}
}

export function setLoginError(boolean: boolean): LoginAction {
    return {type: LoginActionTypes.SET_LOGIN_ERROR, payload: boolean}
}

export function setPassword(string: string): LoginAction {
    return {type: LoginActionTypes.SET_PASSWORD, payload: string}
}

export function setLogin(string: string): LoginAction {
    return {type: LoginActionTypes.SET_LOGIN, payload: string}
}

export function setShowForm(boolean: boolean): LoginAction {
    return {type: LoginActionTypes.SET_SHOW_FORM, payload: boolean}
}