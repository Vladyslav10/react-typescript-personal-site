import { LoginAction, LoginState, LoginActionTypes } from "../../types/loginTypes";

const initialState:LoginState = {
    password:'',
    login:'',
    passwordError: false,
    loginError: false,
    showForm: false,
}

export const loginReducer = (state = initialState, action:LoginAction):LoginState  => {
    switch (action.type) {
        case LoginActionTypes.SET_LOGIN:
            return {...state, login: action.payload}
        case LoginActionTypes.SET_LOGIN_ERROR:
            return {...state, loginError: action.payload}
            case LoginActionTypes.SET_PASSWORD:
            return {...state, password: action.payload}
        case LoginActionTypes.SET_PASSWORD_ERROR:
            return {...state, passwordError: action.payload}
        case LoginActionTypes.SET_SHOW_FORM:
            return {...state, showForm: action.payload}
        default:
            return state
    }
}