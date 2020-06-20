import * as types from './actionTypes'
import * as petsAPI from '../../api/petsAPI'

// actions initialize change
// Reducers listen for dispatched actions, they make changes to the store
// Whenever the store changes, it automatically updates components 
// redux creates a single immutable store
//0*--0--0--0--O--0--0--0--0* 

// action creator
export function loadPetsSuccess(pets) {
    return { type: types.LOAD_PETS_SUCCESS, pets }
}

export function loadPets() {
    return function (dispatch) {
        return petsAPI.getPets().then(pets => {
            dispatch(loadPetsSuccess(pets))
        })
    }
}