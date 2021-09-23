import jwt from "jsonwebtoken";

const JWTPRIVATEKEY = process.env.REACT_APP_JWTPRIVATEKEY;

export const checkToken = () => {
    try {
        const token = localStorage.getItem('identity');
        if (token){
            const decoded = jwt.verify(token, JWTPRIVATEKEY + '');
            return decoded;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}