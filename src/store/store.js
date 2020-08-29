import { createStore, combineReducers } from 'redux'
import ProfileReducer from './profileReducer'
import PostReducer from './postReducer'

const store = createStore(combineReducers({ProfileReducer,PostReducer}))

export default store