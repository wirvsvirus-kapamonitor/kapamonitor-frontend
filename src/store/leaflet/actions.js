import types from '../types';


export const setLocations = (locations) => ({
  type: types.SET_LOCATIONS,
  locations,
});


export const setRawLocations = (rawLocations) => ({
  type: types.SET_RAW_LOCATIONS,
  rawLocations,
});

