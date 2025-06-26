import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },

    logoutUser: (state, action) => {
      state.user = null;
    },
  },
});

export default UserSlice.reducer;
export const { loginUser, logoutUser } = UserSlice.actions;
