import { createContext } from 'react'
import { IUser } from '../../interfaces'

interface ContextProps {
    // ! properties
    auth: IUser | undefined | null

    // ! methods
    login: () => void
    logout: () => void
}

export const AuthContext = createContext({} as ContextProps)
