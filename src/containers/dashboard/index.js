import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { WEB_URL } from '../../config';

class Dashboard extends Component {

    logout = (e) => {

        const { history } = this.props

        localStorage.removeItem('accessToken');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');

        history.push(WEB_URL.LOGIN);
    }

    render() {

        const { user_name, local_user_name } = this.props;

        return (
            <div>
                <h1>Welcome {user_name || local_user_name}!</h1>
                <div>
                <Link className="btn btn-success" to="/posts">View Posts</Link>
                <Link className="btn btn-primary" to="/create-post">Create Post</Link>
                <Button onClick={this.logout}>Logout</Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        user_name: state.login.name
    }
}

export default connect(mapStateToProps)(Dashboard);
