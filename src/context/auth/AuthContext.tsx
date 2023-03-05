import { createContext } from 'react'
import { IUser } from '../../interfaces'

interface ContextProps {
    // ! properties
    auth?: { me: IUser | null | undefined; token: string } | null

    // ! methods
    login: (token: string) => Promise<void>
    logout: () => void
}

export const AuthContext = createContext({} as ContextProps)
