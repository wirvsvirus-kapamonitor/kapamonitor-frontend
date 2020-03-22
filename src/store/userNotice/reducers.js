import types from '../types';

const initState = {
    userNoticeConfirmed:false
};

export default function registerLeafletReducer(state = initState, action) {
    switch (action.type) {
        case types.SET_CONFIRM:
            return {
                ...state,
                userNoticeConfirmed: action.conf
            };

        default:
            return state;
    }
}

