import types from '../types';

//SORTABLE GRID
export const setFormAttribute = (target,value) => ({
  type: types.SET_FORM_ATTRIBUTE,
  target,
  value,
});
