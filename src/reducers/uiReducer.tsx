import { UiState } from "../interfaces/Ui";
import { UiAction } from "../types/Ui";

const initialState: UiState = {
    loading : false,
    message: null,
    error: null,
}

export const uiReducer = (state: UiState = initialState, action: UiAction): UiState => {
    switch (action.type) {
        case 'LOADING_START':
            return {
                ...state,
                loading: true
            }
        case 'LOADING_STOP':
            return {
                ...state,
                loading: false
            }
        case 'MESSAGE_SET':
            return {
                ...state,
                message: action.payload
            }
        case 'MESSAGE_REMOVE':
            return {
                ...state,
                message: null
            }
        case 'ERROR_SET':
            return {
                ...state,
                error: action.payload
            }
        case 'ERROR_REMOVE':
            return {
                ...state,
                error: null
            }
        
        default:
            return state;
    }
}