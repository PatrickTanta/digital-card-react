import { FC, useReducer, useEffect } from 'react'
import { AuthContext, AuthReducer } from '.'
import { useUser } from '../../hooks/useUser'
import { getToken, setToken, removeToken } from '../../api/token'
import { IUser } from '../../interfaces'

export interface AuthState {
    auth?: { me: IUser | undefined | null; token: string } | null
}

const Auth_INITIAL_STATE: AuthState = {
    auth: undefined
}

interface Props {
    children: JSX.Element
}

export const AuthProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE)

    const { getMe } = useUser()

    useEffect(() => {
        ;(async () => {
            const token = getToken()
            if (token) {
                const me = await getMe(token)
                dispatch({ type: '[Auth] - Login', payload: { token, me } })
                return
            }
            dispatch({ type: '[Auth] - Login', payload: null })
        })()

        return () => console.log('Unmount Auth Provider')
    }, [])

    const login = async (token: string) => {
        setToken(token)
        const me = await getMe(token)
        dispatch({ type: '[Auth] - Login', payload: { token, me } })
    }

    const logout = () => {
        if (state.auth) {
            removeToken()
            dispatch({ type: '[Auth] - Logout' })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,

                // methods
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
