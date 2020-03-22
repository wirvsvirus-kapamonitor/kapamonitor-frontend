import stepCounter from "./reducers/stepCounter";
import registerUnit from "./register/reducers";
import settings from "./reducers/settings";
import { combineReducers } from "redux";

const reducers = combineReducers({
  stepCounter,
  registerUnit,
  settings
});

export default reducers;
