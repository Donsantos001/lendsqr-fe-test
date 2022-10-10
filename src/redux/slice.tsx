import { createSlice } from "@reduxjs/toolkit";
import {
  User,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addUserToLocalStorage,
  getUserDetailsFromLocalStorage,
  addUserDetailsToLocalStorage,
} from "../utils/localStorage";

export interface UserState {
  user: User | null;
  userDetails: any[];
  isSideMenuOpen: boolean;
}

const initialState: UserState = {
  user: getUserFromLocalStorage(),
  userDetails:  getUserDetailsFromLocalStorage(),
  isSideMenuOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserDetails: (state, { payload }) => {
      if (!state.userDetails.some((item) => item.id === payload.id)) {
        state.userDetails.push(payload.data);
      }
      addUserDetailsToLocalStorage(state.userDetails)
    },

    toggleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
    closeSideMenu: (state) => {
      state.isSideMenuOpen = false;
    },

    logIn: (state, { payload }) => {
      state.user = payload;
      addUserToLocalStorage(payload);
    },

    logOut: (state) => {
      state.user = null;
      state.isSideMenuOpen = false;
      removeUserFromLocalStorage();
    },
  },
});

export const { toggleSideMenu, logOut, logIn, closeSideMenu, addUserDetails } =
  userSlice.actions;

export default userSlice.reducer;
