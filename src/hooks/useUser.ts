import { getMeApi, getUsersApi } from '../api/user'
import { useState } from 'react'
import { useAuth } from './useAuth'
import { IUser } from '../interfaces/user'

export const useUser = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState<IUser[] | null>(null)

    const { auth } = useAuth()

    const getMe = async (token: string) => {
        try {
            const response = getMeApi(token)
            return response
        } catch (error) {
            throw error
        }
    }

    const getUsers = async () => {
        try {
            setLoading(true)
            const response = await getUsersApi(auth?.token)
            setUsers(response)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        getMe,
        loading,
        error,
        users,
        getUsers
    }
}
