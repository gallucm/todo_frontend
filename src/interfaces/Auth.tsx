export interface AuthState {
    checking: boolean;
    user: User | null;
    userCreated: boolean;
}

export interface User {
    id: string;
    username: string;
    email: string;
    image: String | null;
}

export interface UserRegister {
    username: string;
    email: string;
    password: string;
    password2: string;
}

export interface IUserUpdate {
    username: string
    email: string;
}

export interface UserLogin {
    email: string;
    password: string;
}