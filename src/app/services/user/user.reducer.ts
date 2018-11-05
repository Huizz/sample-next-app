import { IAction } from 'app/utils/interfaces';
import types from './user.types';

export interface IUserState {
    isLoggedIn: boolean,
    user: any
}

const initialState: IUserState = {
    isLoggedIn: false,
    user: {},
}

const UserReducer = (state: IUserState = initialState, action: IAction): IUserState => {
    switch(action.type) {
        case types.LOGIN:
            return { ...state, 
                isLoggedIn: true, 
                user: action.payload 
            }
        default:
            return state;
    }
}

export default UserReducer;