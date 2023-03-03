import { FC, useReducer, useState, useEffect } from 'react'
import { AuthContext, AuthReducer } from '.'
import { useUser } from '../../hooks/useUser'
import { getToken, setToken, removeToken } from '../../api/token'
import { IUser } from '../../interfaces'

export interface AuthState {
    auth: { me: IUser; token: string } | undefined | null
}

const Auth_INITIAL_STATE: AuthState = {
    auth: null
}

export const AuthProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE)

    const [auth, setAuth] = useState<
        { me: any; token: string } | undefined | null
    >(undefined)
    const { getMe } = useUser()

    useEffect(() => {
        ;(async () => {
            const token = getToken()
            if (token) {
                const me = await getMe(token)
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
        dispatch({ type: '[Auth] - Login', payload: auth })
    }

    const logout = () => {
        if (auth) {
            removeToken()
            setAuth(null)
        }
        dispatch({ type: '[Auth] - Logout' })
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,

                // properties
                auth,

                // methods
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
