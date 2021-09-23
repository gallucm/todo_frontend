import { UserLogin, UserRegister } from "../interfaces/Auth";

const axios = require('axios');
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BACKEND;

export const login = async (user: UserLogin): Promise<any> => {
    try{
        const { email, password } = user;
        const response = await axios.post(`api/user/auth`, {email, password});
        return response.data;
    } catch (err: any){
        throw err.response.data;
    }
}  
//Test;

export const register = async (user: UserRegister): Promise<any> => {
    try{
        const { username, email, password } = user;
        const response = await axios.post(`api/user/register`, {username, email, password});
        return response.data;
    } catch (err: any){
        console.log(err.response.data);
        throw err.response.data;
    }
}

export const isLoggedIn = async (): Promise<any> => {
    const token = localStorage.getItem('identity');

    if (token){
        try{
            const response = await axios.get(`api/user/check/${token}`);
            return response.data;
        } catch (err: any){
            throw err.response.data;
        }
    } else {
        return null;
    }
}