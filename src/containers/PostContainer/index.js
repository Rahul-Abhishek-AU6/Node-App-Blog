import React from 'react'
import { connect } from 'react-redux'
import { CREATE_POST } from '../../store/postReducer'
import moment from 'moment'
import Post from '../../components/Post'
import Card from '../../components/PostDesign'

class PostContainer extends React.Component{

    state = {
        Title : "",
        Description : "",
        Time : "",
        Author : ""
    }

    inputHandler = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name] : value
        })
    }

    submitHandler = async (event) => {
        event.preventDefault()
        await this.setState({
            Time : moment().format('MMMM Do YYYY, h:mm a'),
            Author : this.props.user.Name
        })
        this.props.createPost(this.state)
    }

    render(){

        return(
            <React.Fragment>
                <Post inputHandler={this.inputHandler} submitHandler={this.submitHandler}/>
                <Card />
            </React.Fragment>
        )

    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        createPost : data => dispatch (
            {
                type : CREATE_POST,
                payload : data
            }
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user : state.ProfileReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostContainer)