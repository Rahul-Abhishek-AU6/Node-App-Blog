import { WEB_URL } from '../config'
import Layout from '../containers/Layout'

const dashboardRoute = [
    {
        path : WEB_URL.Dashboard,
        exact : true,
        isProtected : true,
        component : Layout
    }
]

export default dashboardRoute