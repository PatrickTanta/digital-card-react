import { AuthState } from './AuthProvider'
import { IUser } from '../../interfaces'

type AuthActionType =
    | { type: '[Auth] - Login' }
    | { type: '[Auth] - Logout'; payload: { me: IUser; token: string } }

export const AuthReducer = (state: AuthState, action: AuthActionType) => {
    switch (action.type) {
        case '[Auth] - Login':
            return {
                ...state,
                auth: action.payload
            }

        case '[Auth] - Logout':
            return {
                ...state,
                auth: null
            }

        default:
            return state
    }
}
