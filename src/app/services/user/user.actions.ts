import { IAction } from 'app/utils/interfaces';
import userAPI from './user.api';
import types from './user.types';

export const login = (username: string, password: string) => async (dispatch:any) => {
    const user = await userAPI.login(username, password)
    dispatch(handleLoginComplete(user));
};

const handleLoginComplete = (user: any): IAction => ({
    payload: user,
    type: types.LOGIN
});