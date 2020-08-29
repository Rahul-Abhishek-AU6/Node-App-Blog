import React from 'react';
import { Button, Label, Input, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const SignupFrom = React.memo((props) => {

    const {
        error,
        nameRef,
        emailRef,
        passwordRef,
        submitHandler,
        inputHandler,
        formData: {
            user_name,
            user_email,
            user_password
        }
    } = props;

    return (
        <div className="container-fluid">
            <Form onSubmit={submitHandler}>

                {error && <Label>{error}</Label>}

                <div className="row align-items-center">
                    <div className="form-group container col-xl-5 col-lg-5 col-md-5 col-sm-7 col-12">
                    <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                id="name"
                                name="user_name"
                                type="text"
                                ref={nameRef}
                                value={user_name}
                                placeholder="Enter your name"
                                autoComplete="off"
                                onChange={inputHandler} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="user_email"
                                type="email"
                                ref={emailRef}
                                value={user_email}
                                placeholder="Enter your email"
                                autoComplete="off"
                                onChange={inputHandler} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                name="user_password"
                                type="password"
                                ref={passwordRef}
                                value={user_password}
                                placeholder="Enter your password"
                                autoComplete="off"
                                onChange={inputHandler} />
                        </FormGroup>
                    </div>
                </div>
                <div>
                    <Button color="primary" type="submit">Signup</Button>
                    <Link className="btn btn-secondary" to="/login">Login</Link>
                </div>
            </Form>
        </div>
    )
});

export default SignupFrom;
