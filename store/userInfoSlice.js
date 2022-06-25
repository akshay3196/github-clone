import { createSlice } from "@reduxjs/toolkit";

export const useInfoSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    firstname: "",
    lastname: "",
    username: "",
    image: "",
    email: "",
  },
  reducers: {
    clearUserData: (state, action) => {
      state = {};
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearUserData, setUsername } = useInfoSlice.actions;

export default useInfoSlice.reducer;
