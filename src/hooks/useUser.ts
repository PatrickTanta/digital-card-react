import { getMeApi } from '../api/user'

export const useUser = () => {
    const getMe = async (token: string) => {
        try {
            const response = getMeApi(token)
            return response
        } catch (error) {
            throw error
        }
    }

    return {
        getMe
    }
}
