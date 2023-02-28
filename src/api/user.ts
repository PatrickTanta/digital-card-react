import { ILoginAdminFormData } from '../interfaces'
import { BASE_API } from '../utils/contants'

export async function loginApi(formData: ILoginAdminFormData) {
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
    } catch (e) {
        console.log(e)
        return
    }
}
