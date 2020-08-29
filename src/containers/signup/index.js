import React, { Component } from 'react';
import { SignupForm } from '../../components';
import { USER_DATA, WEB_URL } from '../../config';

class Signup extends Component {

    constructor(props) {

        super(props);

        this.state = {
            error: '',
            formData: {
                user_name: '',
                user_email: '',
                user_password: ''
            }
        }

        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    inputHandler = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        const { formData } = this.state;

        this.setState({
            error: '',
            formData: { ...formData, [name]: value }
        });
    }

    submitHandler = async (e) => {

        e.preventDefault();

        const { formData } = this.state;
        const { history } = this.props;

        const userData = {
            name: formData.user_name,
            email: formData.user_email,
            password: formData.user_password
        }

        try {
            const user = await USER_DATA.addData(userData);
            console.log(user, '\nadded to the database!');

            history.push(WEB_URL.LOGIN);

        } catch (error) {
            this.setState({ error: error.message });
            console.log('Error:', error.message);
        }
    }

    render() {

        const { formData, error } = this.state;

        return (
            <SignupForm
                error={error}
                formData={formData}
                submitHandler={this.submitHandler}
                inputHandler={this.inputHandler}
                emailRef={this.emailRef}
                passwordRef={this.passwordRef} />
        )
    }
}

export default Signup
