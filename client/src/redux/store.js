import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import { reducer } from './reducer'
const reducers = combineReducers({
    reducer
})
export const store = createStore(reducers, applyMiddleware(reduxThunk))
