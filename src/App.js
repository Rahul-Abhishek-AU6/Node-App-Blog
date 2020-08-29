import React from "react";
import { Switch } from "react-router-dom";
import _ from "lodash";
import routes from "./routes";
import PrivateRoute from "./components/RouteManagment/privateRoute";
import PublicRoute from "./components/RouteManagment/publicRoute";

function App() {
    return (
        <div className="App">
            <Switch>
                {_.map(routes, (route, idx) => {
                    return route.isProtected ? (
                        <PrivateRoute key={idx} {...route} />
                    ) : (
                        <PublicRoute key={idx} {...route} />
                    );
                })}
            </Switch>
        </div>
    );
}

export default App;
