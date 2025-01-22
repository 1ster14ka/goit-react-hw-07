import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContacts, deleteContacts } = slice.actions;

export const selectContacts = (state) => state.contacts.items;
