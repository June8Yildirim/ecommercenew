import { createReducer } from "@reduxjs/toolkit";
export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("loginRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("loadUser", (state) => {
      state.isLoading = true;
    })
    .addCase("logoutRequest", (state) => {
      state.isLoading = true;
    });
  builder
    .addCase("loginSuccess", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    })
    .addCase("loadUserSuccess", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("logoutSuccess", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
      state.user = null;
    });
  builder
    .addCase("loginFailure", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("loadUserFailure", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("logoutFailure", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    });
  builder.addCase("clearError", (state, action) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
