import { SIGNUP } from '../config/actionTypes';

const initialState = {
    name: '',
    email: ''
};

const signupReducer = (state, action) => {

    state = state || initialState;

    switch (action.type) {
        
        case SIGNUP: {
            const user = {
                name: action.payload.name,
                email: action.payload.email
            }

            return { 
                ...state, 
                name: user.name, 
                email: user.email 
            };
        }
        default: {
            return state;
        }
    }
}

export default signupReducer;