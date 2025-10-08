import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./authTypes";

const initialState: AuthState = {
  // Lee el valor desde localStorage al iniciar
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true"); // guarda login
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn"); // limpia login
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
