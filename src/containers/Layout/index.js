import React from "react";
import { connect } from 'react-redux'
import Navbar from "../../components/Navbar";
import { GoogleLogout } from "react-google-login";
import PostContainer from '../PostContainer'

class Layout extends React.Component {

    logout = () => {
        localStorage.clear()
        this.props.history.push('/')
    }


    render() {
        const { user } = this.props;

        return (
            <div className="container">
                <Navbar />
                <GoogleLogout
                    clientId="998582747409-plv3vohvi5731dstq6k6g67jspbpamvv.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                ></GoogleLogout>
                <h1 className="display-2">{`Welcome ${user.Name}`}</h1>
                <PostContainer />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        user : state.ProfileReducer
    }
}

export default connect(mapStateToProps)(Layout);
