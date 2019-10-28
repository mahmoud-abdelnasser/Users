import React, { Component } from 'react'
import { UserState } from '../types/User';
import Loader from './Loader';
import _ from 'lodash'

interface User {
    userData: UserState
}
interface State {

}

export default class UserVeiw extends Component<User, State> {

    render() {
        const { loading, user,userReady, error } = this.props.userData;
        return (
            <div className="user-view">
                {
                    loading ? <Loader /> :

                        !_.isEmpty(error) ? (
                            <div className="error-text">
                                {'Opss user not found , please try again !!'}
                            </div>
                        ) : (
                            userReady && (
                                <div className="user-box">
                                    <img src={user.avatar_url} alt={user.name} />
                                    <p><b>name :</b>{user.name}</p>
                                    <p><b>Followers :</b>{user.followers}</p>
                                    <p><b>location :</b>{user.location}</p>
                                    <p><b>public repos :</b>{user.public_repos}</p>
                                </div>
                            )
                        )
                }
            </div>
        )
    }
}
