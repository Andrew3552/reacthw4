export const selectProducts = (state) => state.products.productArray;
export const selectFavorite = (state) => state.products.favorite;
export const selectIsLoadind = (state) => state.products.isLoadind;
export const selectAddToCart = (state) => state.products.addToCart;
export const isModalOpenCart = (state) => state.products.isModalOpenCart;
export const selectCurrentProduct = (state) => state.products.currentProduct;
export const isModalOpenAccept = (state) => state.products.isModalOpenAccept;
