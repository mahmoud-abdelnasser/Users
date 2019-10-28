import React, { Component } from 'react';
import Loader from './Loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../actions/user';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actions';


interface GetUsersState {
    processing: boolean;
    error: boolean;
    allUsersData: Array<Object>;
    activeClass: number
}

interface Prop {
    getUser: Function
}


export class UsersList extends Component<Prop, GetUsersState> {
    constructor(props: Prop) {
        super(props);
        this.state = {
            processing: false,
            error: false,
            allUsersData: [],
            activeClass: -1
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users').then((res) => {
            this.setState({ processing: true });
            if (res.status !== 200) {
                this.setState({ error: true, processing: false });
                return;
            }
            res.json().then((data) => {
                console.log('data', data)
                this.setState({
                    processing: false,
                    error: false,
                    allUsersData: [...data]
                });
            });
        });
    }

    onSelectUser = (e: any, name: string, index:number): void => {
        e.preventDefault()
        this.setState({
            activeClass: index
        })
        this.props.getUser(name);

    };

    render() {
        const { error, allUsersData, processing ,activeClass} = this.state;

        let resultMarkup;

        if (error) {
            resultMarkup = <p>Users not found, please try again</p>;
        } else if (allUsersData.length > 0) {
            resultMarkup = (
                <div className="users-list">
                    {allUsersData.map((value: any, index: number) => {
                        return (
                            <div className={`user-item ${activeClass==index && 'active'}`} key={index} onClick={e => this.onSelectUser(e, value.login, index)}>
                                <img src={value.avatar_url} alt="value" className="value-image" />
                                <p>{value.login}</p>
                            </div>
                        )
                    })}
                </div>
            );
        }

        return (
            <div className="left-side">
                <div className="left-side-head">
                    <p>user list</p>
                </div>
                {processing ? <Loader /> : resultMarkup}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
    getUser: bindActionCreators(getUser, dispatch),
})

export default connect(
    null,
    mapDispatchToProps
)(UsersList)
