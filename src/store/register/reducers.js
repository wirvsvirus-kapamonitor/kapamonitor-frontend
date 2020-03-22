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


};

export default function registerUnitReducer(state = initState, action) {
  switch (action.type) {
    case types.SET_FORM_ATTRIBUTE:
      return {
        ...state,
        [action.target]:action.value
      };

    default:
      return state;
  }
}

