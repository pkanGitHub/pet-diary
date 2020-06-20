import { combineReducers } from 'redux'
import pets from './petReducer'
const rootReducer = combineReducers({
    pets
});

export default rootReducer