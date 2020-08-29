import { WEB_URL } from '../config';
import { Posts } from '../containers';

const postsRoutes = [
    {
        path: WEB_URL.POSTS,
        exact: true,
        isProtected: true,
        isPublic: true,
        component: Posts.viewPosts
    }
]

export default postsRoutes;
