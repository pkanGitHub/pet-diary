import { handleResponse, handleError } from './apiUtils'

const baseUrl = 'http://localhost:3001/api/v1'

export async function getDiaries() {
    try {
        const response = await fetch(`${baseUrl}/diaries`)
        return handleResponse(response)
    } catch (error) {
        handleResponse(error)
    }
}

export function saveDiary(diary) {

    return fetch(`${baseUrl}/diaries`,
        {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(diary)
        }
    )
        .then(handleResponse)
        .catch(handleError);

}

