import types from '../types';

const initState = {
    user: null
};

export default function registerUserReducer(state = initState, action) {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                user: action.user
            };

        default:
            return state;
    }
}

