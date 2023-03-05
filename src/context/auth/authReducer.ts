import { AuthState } from './AuthProvider'
import { IUser } from '../../interfaces'

type AuthActionType =
    | {
          type: '[Auth] - Login'
          payload: { me: IUser | undefined | null; token: string } | null
      }
    | { type: '[Auth] - Logout' }

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
