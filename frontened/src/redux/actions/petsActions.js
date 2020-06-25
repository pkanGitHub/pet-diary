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

export function updatePetSuccess(pet) {
    return { type: types.UPDATE_PET_SUCCESS, pet }
}

export function createPetSuccess(pet) {
    return { type: types.CREATE_PET_SUCCESS, pet }
}

export function deletePetSuccess(pet) {
    return { type: types.DELETE_PET_SUCCESS, pet }
}

export function loadPets() {
    return function (dispatch) {
        return petsAPI.getPets().then(pets => {
            dispatch(loadPetsSuccess(pets))
        })
    }
}

export function createPet(pet) {
    const createPet = pet.id === ""
    return function (dispatch) {
        return petsAPI.savePet(pet).then(pet => {
            createPet ?
                dispatch(createPetSuccess(pet)) :
                dispatch(updatePetSuccess(pet))
            return pet
        })
    }
}

export function deletePet(pet) {
    return function (dispatch) {
        return petsAPI.deletePet(pet).then(
            () => dispatch(deletePetSuccess(pet))
        )
    }
}