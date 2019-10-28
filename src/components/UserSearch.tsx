import React, { Component } from 'react';
import { getUser } from '../actions/user';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actions';
import { connect } from 'react-redux';

interface Prop {
  getUser: Function
}


export class UserSearch extends Component<Prop, any> {
  searchUserRef: React.RefObject<HTMLInputElement>;
  constructor(props: Prop) {
    super(props);
    this.searchUserRef = React.createRef();
  }


  onSearchClick = (): void => {
    const inputValue = this.searchUserRef.current.value;
    this.props.getUser(inputValue);
  };
  render() {

    return (
      <div className="search-user">
        <p>
          You can search directly by user name !
        </p>
        <input type="text" ref={this.searchUserRef} placeholder={'user name ..'} />
        <button onClick={this.onSearchClick} className="my-button">
          Search
        </button>
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
)(UserSearch)

