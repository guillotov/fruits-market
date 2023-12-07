import { combineReducers, Reducer } from "redux";
import { RootState } from "../types/index";
import authReducer from "./auth";
import fruitsReducer from "./fruits";
import statesReducer from "./states";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  authState: authReducer,
  fruitsState: fruitsReducer
});

export default rootReducer;
