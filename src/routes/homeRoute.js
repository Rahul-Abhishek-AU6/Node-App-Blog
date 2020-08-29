import { WEB_URL } from '../config'
import Home from '../containers/Home'

const homeRoute = [
    {
        path : WEB_URL.Home,
        exact : true,
        isProtected : false,
        component : Home
    }
]

export default homeRoute