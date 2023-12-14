import { createReducer } from "@reduxjs/toolkit";
import * as action from "./action";

const initialState = {
    productArray: [],
    addToCart: [],
    isFavorite: [],
    isCart: [],
    favorite: [],
    cart: []
};

export default createReducer(initialState, (builder) => {
    builder
    .addCase(action.actionGetProducts, (state, { payload }) => {
        state.productArray = [...payload];
    })

    .addCase(action.actionAddFavorite, (state, { payload }) => {
        state.favorite = [...state.favorite, payload];
        localStorage.setItem('favorite', JSON.stringify(state.favorite));  
    })

    .addCase(action.actionRemoveFavorite, (state, { payload }) => {
        state.favorite = state.favorite.filter((fav) => fav.article !== payload);
        localStorage.setItem('favorite', JSON.stringify(state.favorite));
    })
});


