import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import history from "../../history";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: "grey",
  },
}));

const Header = ({ userAuth }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.navBar}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          ></IconButton>
          <Typography
            onClick={() => history.push("/")}
            variant='h6'
            className={classes.title}
          >
            Aug Test By Rahul Abhishek API: https://social-api-rahul.herokuapp.com/
          </Typography>

          <div>
            {userAuth.signedUser !== null ? (
              <Button
                onClick={() => history.push("/create_post")}
                aria-controls='simple-menu'
                aria-haspopup='true'
              >
                Write New Post
              </Button>
            ) : (
              ""
            )}
          </div>

          <div>
            {!userAuth.isLoggedIn ? (
              <Button
                onClick={() => history.push("/user_auth")}
                aria-controls='simple-menu'
                aria-haspopup='true'
              >
                My Account
              </Button>
            ) : (
              ""
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ userAuth }) => ({ userAuth });

export default connect(mapStateToProps)(Header);
