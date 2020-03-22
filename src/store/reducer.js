import stepCounter from "./stepCounter/stepCounter";
import registerUnit from "./register/reducers";
import settings from "./settings/settings";
import leaflet from "./leaflet/reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  stepCounter,
  registerUnit,
  leaflet,
  settings
});

export default reducers;
