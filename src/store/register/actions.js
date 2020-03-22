import types from '../types';

//SORTABLE GRID
export const setFormAttribute = (target,value) => ({
  type: types.SET_FORM_ATTRIBUTE,
  target,
  value,
});

export const setActiveStep = (step) => ({
  type: types.SET_ACTIVE_STEP,
  step
});
