export const selectProducts = (state) => state.products.productArray;
export const selectFavorite = (state) => state.products.favorite;
export const selectAddToCart = (state) => state.products.addToCart;
export const selectIsModalOpen = (state) => state.products.isModalOpen;
export const selectRemove = (state) => state.products.remove;