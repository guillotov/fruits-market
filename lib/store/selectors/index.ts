import { RootState } from "@/lib/store/types";

export const getAuth = (state: RootState) => state.authState;
export const getFruits = (state: RootState) => state.fruitsState;
export const getStates = (state: RootState) => state.statesState;