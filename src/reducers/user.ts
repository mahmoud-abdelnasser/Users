import { User, UserState } from "../types/User";
import { UserActionTypes, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED } from "../types/actions";

const initialState: UserState = {
    loading: false,
    user: {
        name: '',
        avatar_url: '',
        followers: 0,
        location:'',
        public_repos:0
    },
    error: {},
    userReady: false
};

export function userReducer(
    state = initialState,
    action: UserActionTypes
): UserState {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                userReady:true,
                user: {...action.payload},
                error: {}
            };
        case GET_USER_FAILED:
            return {
                ...state,
                loading: false,
                userReady:false,
                error: action.error
            };
        default:
            return state;
    }
}
