import React from "react";
import "./Post.scss";
const Post = function (props) {

    const { inputHandler, submitHandler } = props

    return (
        <form onSubmit={submitHandler}>
            <div className="input-group mb-3 postInput">
                <div className="input-gropup-prepend">
                    <span className="input-group-text">Title</span>
                </div>
                <input
                    type="text"
                    name="Title"
                    className="form-control postInput__title"
                    placeholder="enter task name"
                    onChange={inputHandler}
                />
                <div className="input-group-prepend">
                    <span className="input-group-text">Description</span>
                </div>
                <input
                    type="text"
                    name="Description"
                    className="form-control postInput__description"
                    placeholder="enter description"
                    onChange={inputHandler}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary bg-success"
                        type="submit"
                    >
                        ADD
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Post;
