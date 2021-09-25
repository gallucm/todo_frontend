
export const startLoading = () => ({
    type: 'LOADING_START'
});

export const stopLoading = () => ({
    type: 'LOADING_STOP'
});

export const setMessage = (payload: string) => ({
    type: 'MESSAGE_SET',
    payload
});

export const removeMessage = () => ({
    type: 'MESSAGE_REMOVE'
});

export const setError = (payload: string) => ({
    type: 'ERROR_SET',
    payload
});

export const removeError = () => ({
    type: 'ERROR_REMOVE'
});

export const stopChecking = () => ({
    type: 'CHECKING_STOP'
});

export const edit = () => ({
    type: 'EDIT'
});