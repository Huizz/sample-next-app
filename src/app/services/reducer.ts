// overall reducers for the app
import { combineReducers } from 'redux';

import UserReducer, { IUserState } from './user/user.reducer';

export interface IState {
    user: IUserState;
}

export const state = combineReducers<IState>({
    user: UserReducer
});
