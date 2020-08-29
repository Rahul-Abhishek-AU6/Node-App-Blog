import { WEB_URL } from '../config';
import { Signup } from '../containers';

const signupRoutes = [
    {
        path: WEB_URL.SIGNUP,
        exact: true,
        isProtected: false,
        component: Signup
    }
]

export default signupRoutes;
