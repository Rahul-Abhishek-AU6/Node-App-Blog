import { WEB_URL } from '../config';
import { Homepage } from '../containers';

const homepageRoute = [
    {
        path: WEB_URL.HOMEPAGE,
        exact: true,
        isProtected: false,
        component: Homepage
    },
];

export default homepageRoute;
