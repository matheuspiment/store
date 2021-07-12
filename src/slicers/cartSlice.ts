import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { remove, unionBy, set, findIndex } from "lodash";

import { Product } from "../types";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    add: (state, action: PayloadAction<Product>) => {
      state.items = unionBy(
        [...state.items],
        [{ product: action.payload, amount: 1 }],
        "product.id"
      );
    },
    exclude: (state, action: PayloadAction<string>) => {
      const updatedItems = [...state.items];
      remove(updatedItems, (item) => item.product.id === action.payload);

      state.items = updatedItems;
    },
    increase: (state, action: PayloadAction<string>) => {
      const index = findIndex(
        state.items,
        (item) => item.product.id === action.payload
      );

      if (index === -1) {
        return;
      }

      const item = state.items[index];
      const updatedItem = {
        ...item,
        amount: item.amount + 1,
      };

      const updatedItems = [...state.items];
      updatedItems[index] = updatedItem;

      state.items = updatedItems;
    },
    decrease: (state, action: PayloadAction<string>) => {
      const index = findIndex(
        state.items,
        (item) => item.product.id === action.payload
      );

      if (index === -1) {
        return;
      }

      const item = state.items[index];
      const updatedItem = {
        ...item,
        amount: item.amount >= 2 ? item.amount - 1 : item.amount,
      };

      const updatedItems = [...state.items];
      updatedItems[index] = updatedItem;

      state.items = updatedItems;
    },
  },
});

export const { add, exclude, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
