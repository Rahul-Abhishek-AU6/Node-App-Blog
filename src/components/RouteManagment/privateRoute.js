import React from "react";
import { Route, Redirect } from "react-router-dom";
import { WEB_URL } from "../../config";

export default function PrivateRoute(props) {

    const { component: Component,...rest } = props;
    const isAuth = !!localStorage.getItem('access-token')

    return (
        <Route
            {...rest}
            render={(routeProps) => {
                return isAuth ? (
                    <Component {...rest} {...routeProps}/>
                ) : (
                    <Redirect to={WEB_URL.Home}/>
                );
            }}
        />
    );
}
