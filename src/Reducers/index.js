import {nameReducer,userNameReducer,passwordReducer} from './SignUp'
import {isLoggedInReducer} from './Login'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
key :'root',
storage,
whitelist:['name','username','isLoggedIn']
}
// const allReducers = combineReducers({
//     name: nameReducer,
//     username:userNameReducer,
//     password:passwordReducer,
//     isLoggedIn:isLoggedInReducer
// })
const rootReducer = combineReducers({
    name: nameReducer,
    username:userNameReducer,
    password:passwordReducer,
    isLoggedIn:isLoggedInReducer
})
// export default allReducers;
export default persistReducer(persistConfig,rootReducer);