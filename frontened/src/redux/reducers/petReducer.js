import initialState from './initialState'
import * as types from '../actions/actionTypes'
/*jshint -W030 */
export default function petReducer(state = initialState.pets, action) {
    switch (action.type) {
        case types.LOAD_PETS_SUCCESS:
            return { ...action.pets }
        default:
            return state
    }
}
