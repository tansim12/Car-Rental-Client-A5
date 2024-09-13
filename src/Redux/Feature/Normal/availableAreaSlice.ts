import { createSlice } from "@reduxjs/toolkit";
const initialState: string = "";

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    currentLocation: (_state, actions) => {

      if (actions?.payload === "") {
        return "";
      } else {
        return actions?.payload;
      }
    },
  },
});

export const { currentLocation } = locationSlice.actions;
export const locationReducer = locationSlice.reducer;