import { createSlice } from "@reduxjs/toolkit";
import { api, type Product } from "../api/api";

type State = {
  products: Product[];
};
const state: State = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: state,
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        state.products = action.payload;
      }
    );
  },
});

export const {} = productsSlice.actions;
