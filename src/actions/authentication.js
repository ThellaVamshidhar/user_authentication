

import { types } from './actionTypes';

export const userLogin = (props) => {
    // console.log('called in user login ', props)
    return {
        type: types.LOGIN,
        payload: props
    };
};
export const userLogout = () => {
    // console.log('called in user logout ')
    return {
        type: types.LOGOUT,
    };
};