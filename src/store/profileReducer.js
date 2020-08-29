const ProfileModel = {
    googleID : "",
    Name : ""
}

export const USER_LOGEDIN = "USER_LOGEDIN"

const ProfileReducer = function (state, action){
    state = state || ProfileModel

    switch (action.type) {
        case USER_LOGEDIN:
            const user = {
                ...state,
                googleID : action.payload.googleId,
                Name :action.payload.name
            }
            return user;
        default:
            return state;
    }
}

export default ProfileReducer