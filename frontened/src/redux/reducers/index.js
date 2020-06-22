import { combineReducers } from 'redux'
import pets from './petReducer'
import diaries from './diaryReducer'
const rootReducer = combineReducers({
    pets,
    diaries

});

export default rootReducer;