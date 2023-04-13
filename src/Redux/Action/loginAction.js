import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Connstant/loginConstants"
import axios from 'axios'
export const handleLogin = (userData) => async(dispatch) => {
    try {
        dispatch({type:LOGIN_REQUEST})
        const {data} = await axios.post('http://localhost:5000/user',userData)
        dispatch({type:LOGIN_SUCCESS, payload:userData})
        dispatch({type:LOGIN_FAIL,payload:error})
    } catch (error) {
        
    }
}