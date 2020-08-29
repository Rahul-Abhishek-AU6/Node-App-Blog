import React from 'react'
import Google from '../../components/GoogleLogin'
import { connect } from 'react-redux'
import { USER_LOGEDIN } from '../../store/profileReducer'

class Home extends React.Component{


    Success = (response) =>{
        localStorage.setItem('access-token',response.accessToken)
        this.props.profile(response.profileObj)
        this.props.history.push('/dashboard')
    }

    Failure = () => {
        alert('Unable to login')
        this.props.history.push('/')
    }

    render(){
    return(
        <div className="container">
        <h1 className="display-1">
            Login With Your Google Account
        </h1>
        <Google Success={this.Success} Failure={this.Failure}/>
        </div>
    )}
}

const mapDispatchToProps = (dispatch) =>{
    return{
        profile : data => dispatch (
            {
                type : USER_LOGEDIN,
                payload : data
            }
        )
    }
}

export default connect(null, mapDispatchToProps)(Home)