import stepCounter from "./stepCounter/stepCounter";
import registerUnit from "./register/reducers";
import userNotice from "./userNotice/reducers";
import settings from "./settings/settings";
import leaflet from "./leaflet/reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  stepCounter,
  registerUnit,
  leaflet,
  userNotice,
  settings
});

export default reducers;
