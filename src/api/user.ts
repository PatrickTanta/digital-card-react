import { ILoginAdminFormData } from '../interfaces'
import { BASE_API } from '../utils/contants'

export const loginApi = async (formData: ILoginAdminFormData) => {
    try {
        const url = `${BASE_API}/auth/login/`
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(url, params)

        if (response.status !== 200) {
            throw new Error('Error when login')
        }
        const result = response.json()
        return result
    } catch (error) {
        throw error
    }
}

export const getMeApi = async (token: string) => {
    try {
        const url = `${BASE_API}/auth/me/`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url, params)
        const result = response.json()
        return result
    } catch (error) {
        throw error
    }
}
