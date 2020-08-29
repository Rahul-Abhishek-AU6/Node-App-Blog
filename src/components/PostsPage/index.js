import React from 'react';
import { Label, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const Posts = React.memo((props) => {
    const {
        error,
        posts
    } = props;

    return (

        <div className="container-fluid">
            <Link className="btn btn-primary" to="/dashboard">Dashboard</Link>
            <ListGroup>

                {error && <Label>{error}</Label>}

                {_.map(posts, (post, idx) => {

                    return (
                        <ListGroupItem key={idx} >
                            <div>
                                <ListGroupItemHeading>
                                    Title: {post.title}
                                </ListGroupItemHeading>
                            </div>
                            <div>
                                <ListGroupItemText>
                                    Description: {post.body}
                                </ListGroupItemText>
                            </div>
                            <div>
                                <ListGroupItemText>
                                    Author: {post.userId}
                                </ListGroupItemText>
                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div >
    )
});

export default Posts;
