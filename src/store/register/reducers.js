import types from '../types';

const initState = {
    lastName: '',
    firstName: '',
    email: '',
    phone: '',

    street: '',
    number: '',
    postalCode: '',
    city: '',

    hasInternet: false,


    bedsWithDevicesCarpet: '',
    bedsWithoutDevicesCarpet: '',

    bedsWithDevices: '',
    bedsWithoutDevices: '',

    washbasins: '',
    showers: '',
    toilets: '',


    activeStep: 0,

    nav:"dashboard"
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
        case types.RESET_ATTR:

            return {
                ...state,
                lastName: '',
                firstName: '',
                email: '',
                phone: '',

                street: '',
                number: '',
                postalCode: '',
                city: '',
                hasInternet: false,

                bedsWithDevicesCarpet: '',
                bedsWithoutDevicesCarpet: '',

                bedsWithDevices: '',
                bedsWithoutDevices: '',

                washbasins: '',
                showers: '',
                toilets: '',
            };
        case types.SET_NAVIGATION:
            return {
                ...state,
                nav: action.nav
            };
        default:
            return state;
    }
}

