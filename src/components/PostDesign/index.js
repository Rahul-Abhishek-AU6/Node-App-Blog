import React from "react";
import { connect } from "react-redux";
import { DELETE_POST } from '../../store/postReducer'

const Card = function (props) {
    const { posts, dispatch } = props;
    
    // const Delete = (id) => {
    //     return {
    //         type : DELETE_POST,
    //         payload : id
    //     }
    // }

    // const deleteTodo = (id) => {
    //     dispatch(Delete(id))
    // }

    return (
        <div className="card-columns">
            {posts.map((post, idx) => {
                return (
                    <div className="card" key={idx}>
                        <div className="card-body">
                            <h5 className="card-title">{post.Title}</h5>
                            <button className="btn btn-danger" 
                            // onClick={
                            //     deleteTodo(post.id)
                            //     } 
                            >Delete</button>
                            <p className="card-text">{post.Description}</p>
                            <p className="card-text">{post.Author}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    {post.Time}
                                </small>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.PostReducer,
    };
};

export default connect(mapStateToProps)(Card);
