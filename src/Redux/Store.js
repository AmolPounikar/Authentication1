import {combineReducers,createStore,applyMiddleware} from 'redux' 
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { logreducer } from './Reducer/loginReducer'

const rootReducer = combineReducers({
    login : logreducer  
})

const Reduxstore = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default Reduxstore