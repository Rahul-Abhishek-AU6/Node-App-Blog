import React from 'react';
import { Button, Label, Input, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const CreatePost = React.memo((props) => {

    const {
        error,
        titleRef,
        descriptionRef,
        user_name,
        submitHandler,
        inputHandler,
        post: {
            post_title,
            post_description
        }
    } = props;

    return (
        <div className="container-fluid">
            <Form onSubmit={submitHandler}>

                {error && <Label>{error}</Label>}

                <div className="row align-items-center">
                    <div className="form-group container col-xl-5 col-lg-5 col-md-5 col-sm-7 col-12">
                    <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                id="title"
                                name="post_title"
                                type="text"
                                ref={titleRef}
                                value={post_title}
                                placeholder="Enter post title"
                                autoComplete="off"
                                onChange={inputHandler} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                id="description"
                                name="post_description"
                                type="text"
                                ref={descriptionRef}
                                value={post_description}
                                placeholder="Enter post description"
                                autoComplete="off"
                                onChange={inputHandler} />
                        </FormGroup>

                        <FormGroup>
                            <Label>Author: {user_name}</Label>
                        </FormGroup>
                    </div>
                </div>
                <div>
                    <Button color="primary" type="submit">Create Post</Button>
                    <Link className="btn btn-secondary" to="/dashboard">Dashboard</Link>
                </div>
            </Form>
        </div>
    )
});

export default CreatePost;
