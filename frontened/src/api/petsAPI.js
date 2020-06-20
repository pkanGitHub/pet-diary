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