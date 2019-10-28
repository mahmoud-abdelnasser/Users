import React, { Component } from 'react'
import UsersList from './UsersList'
import UserDetails from './UserDetails'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions } from '../types/actions'
import { bindActionCreators } from 'redux'
import { getUser } from '../actions/user'

interface Props {
    
}
interface State {
    
}
 
class Users extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="user-page">
                <UsersList/>
                <UserDetails/>
            </div>
        )
    }
}
const mapStateToProps =(state:AppState) =>({
    userReducer : state.userReducer
})
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
    getUser: bindActionCreators(getUser,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Users)