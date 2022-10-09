import { createSlice } from "@reduxjs/toolkit";
import {
  User,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addUserToLocalStorage,
} from "../utils/localStorage";

export interface UserState {
  user: User | null;
  isSideMenuOpen: boolean;
}

const initialState: UserState = {
  user: getUserFromLocalStorage(),
  isSideMenuOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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

export const { toggleSideMenu, logOut, logIn, closeSideMenu } =
  userSlice.actions;

export default userSlice.reducer;
