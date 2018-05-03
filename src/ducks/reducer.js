import axios from 'axios';

const initialState = {
    user: {}
};

const GET_USER_INFO = 'GET_USER_INFO';


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
        console.log(Object.assign({}, state, { user: action.payload }))
            return Object.assign({}, state, { user: action.payload });
        default:
            return state;
    }
}


export function getUserInfo() {
    const userInfo = axios.get('/auth/me').then(res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}