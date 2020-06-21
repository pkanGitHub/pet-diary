import initialState from './initialState'
import * as types from '../actions/actionTypes'
/*jshint -W030 */
export default function petReducer(state = initialState.pets, action) {
    switch (action.type) {
        case types.LOAD_PETS_SUCCESS:
            return { ...action.pets }
        case types.CREATE_PET_SUCCESS:
            return { data: [...state.data, action.pet.data] }
        default:
            return state
    }
}

