const SET_LASTNAME = "registerUnit/SET_LASTNAME";
const SET_FIRSTNAME = "registerUnit/SET_FIRSTNAME";
const SET_EMAIL = "registerUnit/SET_EMAIL";

const initState = {
  lastName: 'ddd',
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
    case SET_LASTNAME:
      return {
        ...state,
        lastName:action.lastName
      };

    case SET_FIRSTNAME:
      return {
        ...state,
        firstName: action.firstName
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action.email
      };

    default:
      return state;
  }
}

export function setLastname() {
  return {
    type: SET_LASTNAME
  };
}
export function setFirstname() {
  return {
    type: SET_FIRSTNAME
  };
}
export function setEmail() {
  return {
    type: SET_EMAIL
  };
}

