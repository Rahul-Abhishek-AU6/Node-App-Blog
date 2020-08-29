import loginRoute from './loginRoute';
import signupRoute from './signupRoute';
import dashboardRoute from './dashboardRoute';
import homepageRoute from './homepageRoute';
import postsRoute from './postsRoute';
import createPostRoute from './createPostRoute';

export default [
    ...dashboardRoute,
    ...loginRoute,
    ...signupRoute,
    ...homepageRoute,
    ...postsRoute,
    ...createPostRoute
]
