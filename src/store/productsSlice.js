import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./operatioins";

const initialState = {
  productArray: [],
  addToCart: [],
  isFavorite: [],
  isLoadind: false,
  error: null,
  isCart: [],
  favorite: [],
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFavoriteProducts: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFavoriteProducts: (state, action) => {
      state.favorite = state.favorite.filter(
        (product) => product.article !== action.payload
      );
    },
    addProducts: (state, action) => {
      state.productArray.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoadind = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoadind = false;
        state.productArray = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoadind = false;
        state.error = action.payload;
      });
  },
});

export const { setFavoriteProducts, removeFavoriteProducts } =
  productSlice.actions;

export const productsReducer = productSlice.reducer;
