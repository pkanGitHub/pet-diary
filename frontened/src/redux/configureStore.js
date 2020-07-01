import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'


export default function configureStore(initialState) {
    // to have chrome access to Redux DevTool
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
}


