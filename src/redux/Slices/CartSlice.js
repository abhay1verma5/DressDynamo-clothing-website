
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);

            if (existingItem) {
                // If item already exists, increment its quantity
                existingItem.quantity++;
            } else {
                // If item does not exist, add it to the cart with quantity 1
                state.push({ ...action.payload, quantity: 1 });
            }

            // Update local storage with the updated cart
            localStorage.setItem("cart", JSON.stringify(state));
        },
        remove: (state, action) => {
            const { id } = action.payload;
            const existingItemIndex = state.findIndex(item => item.id === id);

            if (existingItemIndex !== -1) {
                const existingItem = state[existingItemIndex];

                // If item quantity is greater than 1, decrement its quantity
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                } else {
                    // If item quantity is 1, remove it from the cart
                    state.splice(existingItemIndex, 1);
                }

                // Update local storage with the updated cart
                localStorage.setItem("cart", JSON.stringify(state));
            }
        }
    }
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
