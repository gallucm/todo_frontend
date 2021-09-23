import { AuthState } from "../interfaces/Auth";
import { AuthAction } from "../types/Auth";

const initialState: AuthState = {
   checking: true,
   user: null,
   userCreated: false,
}

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "USER_SET":
            return {
                ...state,
                user: action.payload
            }

        case "USER_REMOVE":
            return {
                ...state,
                user: null
            }

        case "CHECKING_STOP":
            return {
                ...state,
                checking: false
            }

        case "USER_CREATED":
            return {
                ...state,
                userCreated: true
            }

        case "USER_CREATED_RESET":
            return {
                ...state,
                userCreated: false
            }
        
        default:
            return state;
    }
}