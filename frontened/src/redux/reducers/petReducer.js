import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function petReducer(state = initialState.pets, action) {

    switch (action.type) {
        case types.LOAD_PETS_SUCCESS:
            return { ...action.pets }
        case types.CREATE_PET_SUCCESS:
            return { data: [...state.data, action.pet.data] }
        case types.UPDATE_PET_SUCCESS:
            return {
                data: state.data.map(pet => pet.id === action.pet.data.id ? action.pet.data : pet)
            }
        case types.DELETE_PET_SUCCESS:
            return {
                data: state.data.filter(pet => pet.id !== action.pet.id)
            }
        default:
            return state
    }
}

