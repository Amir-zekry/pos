import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
    customer: null,
    type: null, // Default order type
    paymentMethod: null,
    paymentStatus: null // Default payment method
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                ...action.payload,
                amount: 1,
            };
            state.items.push(newItem);
            state.total += newItem.price; // Update total when an item is added
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.total -= action.payload.price; // Update total when an item is removed
        },
        clearOrder: (state) => {
            state.items = [];
            state.total = 0; // Reset total when items are cleared
            state.customer = {};
            state.type = null;
            state.payment = null;
        },
        increaseItemAmount: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.amount += 1;
                state.total += item.price;
            }
        },
        decreaseItemAmount: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item && item.amount > 1) {
                item.amount -= 1;
                state.total -= item.price;
            }
        },
        setOrderDetails: (state, action) => {
            const { customer, orderType, paymentMethod, paymentStatus } = action.payload;
            state.customer = customer;
            state.type = orderType;
            state.paymentMethod = paymentMethod;
            state.paymentStatus = paymentStatus
        }
    }
});
export const { addItem, removeItem, clearOrder, increaseItemAmount, decreaseItemAmount, setOrderDetails } = orderSlice.actions;
export default orderSlice.reducer;