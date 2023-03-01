import { createContext, useState, useEffect } from 'react'
import { setToken, getToken, removeToken } from '../api/token'
import { useUser } from '../hooks/useUser'

interface IAuthContext {
    auth: any | undefined | null
    login: () => void
    logout: () => void
}

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null
} as IAuthContext)

export function AuthProvider({ children }): JSX.Element {
    const [auth, setAuth] = useState<
        { me: any; token: string } | undefined | null
    >(undefined)
    const { getMe } = useUser()

    useEffect(() => {
        ;(async () => {
            const token = getToken()
            console.log('token ', token)
            if (token) {
                const me = await getMe(token)
                console.log('me ', me)
                setAuth({ token, me })
                return
            }
            setAuth(null)
        })()

        return () => console.log('unmount auth')
    }, [])

    const login = async (token: string) => {
        setToken(token)
        const me = await getMe(token)
        setAuth({ token, me })
        console.log('auth ', auth)
    }

    const logout = () => {
        if (auth) {
            removeToken()
            setAuth(null)
        }
    }

    const valueContext = {
        auth,
        login,
        logout
    }

    if (auth === undefined) return <div>Loading...</div>

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}
