import { WEB_URL } from '../config';
import { Dashboard } from '../containers';

const dashboardRoute = [
    {
        path: WEB_URL.DASHBOARD,
        exact: true,
        isProtected: true,
        component: Dashboard
    },
];

export default dashboardRoute;
