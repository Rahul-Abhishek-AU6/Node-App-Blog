import { WEB_URL } from '../config';
import { Posts } from '../containers';

const createPostRoutes = [
    {
        path: WEB_URL.CREATE_POST,
        exact: true,
        isProtected: true,
        component: Posts.createPost
    }
]

export default createPostRoutes;
