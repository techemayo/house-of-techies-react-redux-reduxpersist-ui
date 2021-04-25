import {createStore} from 'redux';
import allReducers from './Reducers';
import {persistStore} from 'redux-persist'
const store = createStore(
  allReducers
)
const persistor = persistStore(store)

export {persistor,store}
