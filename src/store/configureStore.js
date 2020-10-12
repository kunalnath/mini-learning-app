import { createStore , combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import studentCrtReducer from '../reducers/studentCrtReducer'
import courseCrtReducer from '../reducers/courseCrtReducer'
import courseReducer from '../reducers/courseReducer'
import studentReducer from '../reducers/studentReducer'
import profileReducer from '../reducers/profileReducer'
import profileCrtReducer from '../reducers/profileCrtReducer'

const configureStore = () =>{
    const store = createStore(combineReducers({
        userInfo : userReducer,
        studentCrtInfo : studentCrtReducer,
        courseCrtInfo : courseCrtReducer,
        courseInfo : courseReducer,
        studentInfo : studentReducer,
        profileInfo : profileReducer,
        profileCrtInfo : profileCrtReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore