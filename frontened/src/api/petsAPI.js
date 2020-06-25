import { handleResponse, handleError } from './apiUtils'

const baseUrl = 'http://localhost:3001/api/v1'

export async function getPets() {
    try {
        const response = await fetch(`${baseUrl}/pets`)
        return handleResponse(response)
    } catch (error) {
        handleError(error)
    }
}

function formatPet(pet) {
    if (pet.id) {
        return {
            pet: {
                name: pet.name,
                birth_date: pet.birth_date
            }
        }
    } else {
        return {
            name: pet.name,
            birth_date: pet.birth_date
        }
    }
}

export function savePet(pet) {
    // console.log(pet)
    // debugger;
    const idOrBlank = pet.id ? pet.id : ""
    return fetch(`${baseUrl}/pets/${idOrBlank}`,
        {
            headers: {
                "Content-Type": "application/json"
            },
            method: `${pet.id ? "PUT" : "POST"}`,
            body: JSON.stringify(formatPet(pet))
        }
    )
        .then(handleResponse)
        .catch(handleError);

}

export function deletePet(pet) {
    return fetch(`${baseUrl}/pets/${pet.id}`, { method: "DELETE" })
        .catch(handleError)
}