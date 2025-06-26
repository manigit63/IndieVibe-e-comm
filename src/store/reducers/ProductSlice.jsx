import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  searchTerm: "",
  categoryFilter: "",
  sortBy: "recommended",
};
const productSlice = createSlice({
  name: "products",
  initialState,
  
  reducers: {
    loadproducts: (state, action) => {
      state.products = action.payload;
    },

    // loadlazyproducts: (state, action) => {
    //   state.products = [...state.products, ...action.payload];
    // },

    loadlazyproducts: (state, action) => {
      state.products.push(...action.payload);
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export default productSlice.reducer;
export const {
  loadproducts,
  loadlazyproducts,
  setSearchTerm,
  setCategoryFilter,
  setSortBy,
} = productSlice.actions;
