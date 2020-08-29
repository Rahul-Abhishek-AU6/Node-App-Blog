import { SIGNUP } from '../config/actionTypes';

export const signupAction = (user) => {
    
    return { type: SIGNUP, payload: user };
}
