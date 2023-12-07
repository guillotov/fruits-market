import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FruitsState } from "@/lib/store/types/index";

export const initialState: FruitsState = {
    fruitsData: [],
    fruitSelected:[],
    fruitSelectedInfo:[]
};

const fruitsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAllFruits: (state, { payload }: PayloadAction<[]>) => ({
      ...state,
      fruitsData: payload,
    }),
    actualFruit: (state, { payload }: PayloadAction<[]>) => ({
      ...state,
      fruitSelected: payload,
    }),
    actualFruitAllInfo: (state, { payload }: PayloadAction<[]>) => ({
        ...state,
        fruitSelectedInfo: payload,
      }),    
  },
});

export const { getAllFruits, actualFruit,actualFruitAllInfo } = fruitsSlice.actions;

export default fruitsSlice.reducer;
