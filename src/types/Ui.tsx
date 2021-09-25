export type UiAction = 
    | { type: 'LOADING_START' }
    | { type: 'LOADING_STOP' }
    | { type: 'MESSAGE_SET', payload: string }
    | { type: 'MESSAGE_REMOVE' }
    | { type: 'EDIT'}
    | { type: 'ERROR_SET', payload: string }
    | { type: 'ERROR_REMOVE' };