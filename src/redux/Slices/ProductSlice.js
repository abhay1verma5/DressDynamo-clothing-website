
import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data"; // Assuming you have the initial products data

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: products, // Initial products data
        filteredProducts: products, // Initially same as all products
    },
    reducers: {
        filterByCategory: (state, action) => {
            const category = action.payload;
            // Filter products based on the selected category
            state.filteredProducts = state.products.filter(product => product.category === category);
        },
        sortByPrice: (state) => {
            // Sort products by price
            const sortedProducts = [...state.products].sort((a, b) => a.price - b.price);
            state.filteredProducts = sortedProducts;        }
    }
});

export const { filterByCategory, sortByPrice } = productSlice.actions;
export default productSlice.reducer;
