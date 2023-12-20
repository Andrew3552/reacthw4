import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./operatioins";

const initialState = {
  productArray: [],
  addToCart: [],
  favorite: [],
  isModalOpenCart: false,
  currentProduct: {},
  isModalOpenAccept: false,
  isLoadind: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.productArray = [...action.payload];
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    openModal: (state, action) => {
      if (action.payload === "modalCart") {
        state.isModalOpenCart = !state.isModalOpenCart;
      }
      if (action.payload === "modalAccept") {
        state.isModalOpenAccept = !state.isModalOpenAccept;
      }
    },
    setFavoriteProducts: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFavoriteProducts: (state, action) => {
      state.favorite = state.favorite.filter(
        (product) => product.article !== action.payload
      );
    },
    setCartProducts: (state, action) => {
      state.addToCart.push(action.payload);
    },
    removeCartProducts: (state, action) => {
      state.addToCart = state.addToCart.filter(
        (product) => product.article !== action.payload
      );
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

export const { setFavoriteProducts, removeFavoriteProducts, setCartProducts, removeCartProducts, addProducts, openModal, setCurrentProduct, removeFromFavoriteProducts } =
  productSlice.actions;

export const productsReducer = productSlice.reducer;
