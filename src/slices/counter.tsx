import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type State = {
  count: number;
};
const state: State = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: state,
  reducers: {
    addOne: (state) => {
      state.count += 1;
    },
    addMany: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { addOne, addMany, reset } = counterSlice.actions;
