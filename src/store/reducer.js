import stepCounter from "./stepCounter/stepCounter";
import registerUnit from "./register/reducers";
import settings from "./settings/settings";
import { combineReducers } from "redux";

const reducers = combineReducers({
  stepCounter,
  registerUnit,
  settings
});

export default reducers;
