import types from '../types';

const initState = {
    locations: [
        {
            position: { lng: 13.380171, lat: 52.516101 },
            text: 'Hotel Adlon',
            workload: 60
        },
        {
            position: { lng: 13.388807, lat: 52.519568 },
            text: 'Hotel NH Collection',
            workload: 80
        },
        {
            position: { lng: 13.389649, lat: 52.520456 },
            text: 'Hotel Euro Star',
            workload: 40
        },
        {
            position: { lng: 13.394174, lat: 52.515826 },
            text: 'Hotel de Rome',
            workload: 20
        }
    ],

    rawLocations:[]


};

export default function registerLeafletReducer(state = initState, action) {
    switch (action.type) {
        case types.SET_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            };
        case types.SET_RAW_LOCATIONS:
            return {
                ...state,
                rawLocations: action.rawLocations
            };
        default:
            return state;
    }
}

