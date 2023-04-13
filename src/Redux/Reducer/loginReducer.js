import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Connstant/loginConstants"

export const logreducer = (state = {}, {type,payload} ) => {
switch (type) {
    case LOGIN_REQUEST: return{loading: true}
    case LOGIN_SUCCESS: return{loading: false, registeruser:true}
    case LOGIN_FAIL: return{loading: false, registeruserError:payload}

    default:return state
}
}