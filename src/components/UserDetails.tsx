import React, { Component } from 'react'
import UserSearch from './UserSearch'
import UserVeiw from './UserVeiw'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { UserState } from '../types/User'

interface State {

}

interface Prop {
    userData: UserState
}

class UserDetails extends Component<Prop, State> {

    render() {
        return (
            <div className="right-side">
                <UserSearch />
                <UserVeiw userData={this.props.userData} />
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    userData: state.userReducer
})


export default connect(
    mapStateToProps
)(UserDetails)
