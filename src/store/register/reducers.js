import types from '../types';

const initState = {
    lastName: 'Hans',
    firstName: '',
    email: '',
    phone: '',

    street: '',
    number: '',
    postalCode: '',
    city: '',

    hasInternet: false,


    activeStep: 0

};

export default function registerUnitReducer(state = initState, action) {
    switch (action.type) {
        case types.SET_FORM_ATTRIBUTE:
            return {
                ...state,
                [action.target]: action.value
            };
        case types.SET_ACTIVE_STEP:

            return {
                ...state,
                activeStep: action.step
            };
        default:
            return state;
    }
}

