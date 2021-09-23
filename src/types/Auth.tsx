import { User } from "../interfaces/Auth";

export type AuthAction = 
    | { type: 'USER_SET' , payload: User }
    | { type: 'USER_REMOVE' }
    | { type: 'USER_CREATED' }
    | { type: 'USER_CREATED_RESET' }
    | { type: 'CHECKING_STOP' };