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

export const resetAttr = () => ({
  type: types.RESET_ATTR,
});

export const setNavigation = (nav) => ({
  type: types.SET_NAVIGATION,
  nav
});
