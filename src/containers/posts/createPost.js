import React, { Component } from 'react';
import { CreatePost } from '../../components';
import { POST_DATA, WEB_URL } from '../../config';
// import { connect } from 'react-redux';
// import { loginAction } from '../../actions';

class Posts extends Component {

    constructor(props) {

        super(props);

        this.state = {
            error: '',
            post: {
                post_title: '',
                post_description: ''
            }
        }

        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    inputHandler = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        const { post } = this.state;

        this.setState({
            error: '',
            post: { ...post, [name]: value }
        });
    }

    submitHandler = async (e) => {

        e.preventDefault();

        const { post } = this.state;
        const { history } = this.props;

        const postData = {
            title: post.post_title,
            description: post.post_description
        }

        try {
            const post = await POST_DATA.addPost(postData);
            console.log(post, '\nadded to the database!');

            history.push(WEB_URL.POSTS);

        } catch (error) {
            this.setState({ error: error.message });
            console.log('Error:', error.message);
        }
    }

    render() {

        const { post, error } = this.state;
        const user_name = localStorage.getItem('user_name')

        return (
            <CreatePost
                error={error}
                post={post}
                submitHandler={this.submitHandler}
                inputHandler={this.inputHandler}
                titleRef={this.titleRef}
                descriptionRef={this.descriptionRef}
                user_name={user_name} />
        )
    }
}

// const mapDispatchToProps = (dispatch) => {

//     return {
//         login: (user) => dispatch(loginAction(user))
//     }
// }

export default Posts;
