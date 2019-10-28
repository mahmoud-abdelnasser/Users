import { User } from "./User";

export const GET_USER_REQUEST = 'GET_USER_REQUEST' ;
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS' ;
export const GET_USER_FAILED = 'GET_USER_FAILED' ;

export interface GetUserRequestAction {
    type: typeof GET_USER_REQUEST;
    loading: boolean
}

export interface GetUserSuccessAction {
    type: typeof GET_USER_SUCCESS;
    payload: User
}

export interface GetUserFailedtAction {
    type: typeof GET_USER_FAILED;
    error: object
}

export type UserActionTypes = GetUserRequestAction | GetUserSuccessAction | GetUserFailedtAction;

export type AppActions = UserActionTypes;