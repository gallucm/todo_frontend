import { checkToken } from "../helpers/jwt";
import { UserLogin, UserRegister } from "../interfaces/Auth";
import { login, register } from "../services/User";
import { setError, setMessage, startLoading, stopLoading } from "./Ui";


export const startLogin = (userLogin: UserLogin) => {
    return async (dispatch: any) => {
        try {
            dispatch(startLoading());
            const { user, token } = await login(userLogin);
            dispatch(setLogin(user));
            setSession(token);
        } catch (error: any) {
            if (error.code === 403)
                dispatch(setError('Usuario o contraseña incorrecta'));
            else
                dispatch(setError('Error al iniciar sesión'));
        } finally {
            dispatch(stopLoading());
        }
    }
}

export const startLogout = () => {
    return async (dispatch: any) => {
        dispatch(setLogout());
        removeSession();
    }
}


export const startRegister = (userRegister: UserRegister) => {
    return async (dispatch: any) => {
        try {
            dispatch(startLoading());

            if (userRegister.password !== userRegister.password2){
                dispatch(setError('Las contraseñas no coinciden'));
                return;
            }
            await register(userRegister);
            dispatch(setMessage('Usuario registrado correctamente'));
            dispatch(setCreated());
        } catch (error: any) {
            if (error.code === 403)
                dispatch(setError('El email ingresado ya está siendo utilizado'));
            else
                dispatch(setError('Error al registrar usuario'));
        } finally {
            dispatch(stopLoading());
        }
    }
}

export const startCheck = () => {
    return async (dispatch: any) => {
        try {
            const decoded = checkToken();

            if (decoded) 
                dispatch(setLogin(decoded));
            else
                removeSession();
        } catch (error: any) {
            dispatch(setError('Error al chequear token'));
            removeSession();
        } finally {
            dispatch(stopChecking());
        }
    }
}

const setLogin = (payload: any) => ({
    type: 'USER_SET',
    payload
});

export const setLogout = () => ({
    type: 'USER_REMOVE'
});

const setCreated = () => ({
    type: 'USER_CREATED'
});

export const removeCreated = () => ({
    type: 'USER_CREATED_RESET'
})

const stopChecking = () => ({
    type: 'CHECKING_STOP'
});

const setSession = (token: string) => {
    if (token)
        localStorage.setItem('identity', token);
};

const removeSession = () => {
    localStorage.removeItem('identity');
};