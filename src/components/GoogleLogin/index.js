import React from 'react'
import { GoogleLogin } from 'react-google-login'

const Google = function (props) {

    const { Success, Failure } = props

    return (
        <GoogleLogin 
            clientId="998582747409-plv3vohvi5731dstq6k6g67jspbpamvv.apps.googleusercontent.com"
            buttonText="Login + Google"
            onSuccess={Success}
            onFailure={Failure}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default Google