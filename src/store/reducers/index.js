import stepCounter from "./stepCounter";
import registerUnit from "./registerUnit";
import settings from "./settings";
import { combineReducers } from "redux";

const reducers = combineReducers({
  stepCounter,
  registerUnit,
  settings
});

export default reducers;
