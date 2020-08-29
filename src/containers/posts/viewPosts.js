import React, { Component } from 'react';
import { PostsPage } from '../../components';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { loginAction } from '../../actions';

class Posts extends Component {

    constructor(props) {

        super(props);

        this.state = {
            error: '',
            posts: []
        }
    }

    componentDidMount() {
        this.getPosts();
    }
    

    async getPosts() {
        try {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            this.setState({
                posts: posts.data
            });
            console.log(posts.data);
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        const { posts, error } = this.state;

        return (
            <PostsPage
                error={error}
                posts={posts} />
        )
    }
}

// const mapDispatchToProps = (dispatch) => {

//     return {
//         login: (user) => dispatch(loginAction(user))
//     }
// }

export default Posts;
