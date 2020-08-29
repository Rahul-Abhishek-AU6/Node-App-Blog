const postModel = {
    id: "",
    Title: "",
    Description: "",
    Time: "",
    Author:""
};

const initialState = [];

// Actions
export const CREATE_POST = "";
export const DELETE_POST = "";

const PostReducer = function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case CREATE_POST:
            const post = {
                ...postModel,
                id: Date.now(),
                Title: action.payload.Title,
                Description: action.payload.Description,
                Time: action.payload.Time,
                Author: action.payload.Author
            };
            return [...state, post];
        case DELETE_POST:
            console.log(action.payload.id);
            state = state.filter(post => post.id !== action.payload.id)
            return state;
        default:
            return state;
    }
};

export default PostReducer;
