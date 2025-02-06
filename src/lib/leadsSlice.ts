import { Leads } from "@/app/api/leads/route";
import { createSlice } from "@reduxjs/toolkit";

export const leadsSlice = createSlice({
  name: "leads",
  initialState: {
    value: [] as Leads,
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
    filter: (state, action) => {
      state.value = state.value.filter(
        (item) => item.status === action.payload
      );
    },
    approve: (state, action) => {
      const selectedItem = state.value.find(
        (item) => item.id === action.payload
      );
      if (selectedItem) selectedItem.status = "Reached Out";
    },
    unapprove: (state, action) => {
      const selectedItem = state.value.find(
        (item) => item.id === action.payload
      );
      if (selectedItem) selectedItem.status = "Pending";
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, filter, approve, unapprove } = leadsSlice.actions;

export default leadsSlice.reducer;
