import React, { Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import PostDisplay from "./Posts/PostsDisplay";
import UserAuthForm from "./UserAuth/UserAuthForm";
import CreatePost from "./Posts/CreatePost";

const App = () => {
  return (
    <Fragment>
      <Router history={history}>
        <div style={{ backgroundColor: "rgba(27, 27, 27, 0.61)" }}>
          <Header />
          <Switch>
            <Route exact path='/' component={PostDisplay} />
            <Route exact path='/user_auth' component={UserAuthForm} />
            <Route exact path='/create_post' component={CreatePost} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export { App as default };
