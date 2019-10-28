import { AppActions, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED } from "../types/actions";
import { User, UserState } from "../types/User";
import { Dispatch } from "redux";
import { AppState } from "../store";
import { userService } from "../services/user";

export const getUserRequest = () : any => {
    return {
        type: GET_USER_REQUEST
    }
}

export const getUserSuccess = (user: User): any => {
    return {
        type: GET_USER_SUCCESS,
        payload: user
    }
}

export const getUserFailed = (error: object): any => {
    return {
        type: GET_USER_FAILED,
        error
    }
}

export const getUser = (name: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(getUserRequest());
        userService
            .getUser(name)
            .then(response => {
                const data = response.data;
                dispatch(getUserSuccess(data));
            })
            .catch(error => {
                dispatch(getUserFailed(error.response.data));
            });
    };
}