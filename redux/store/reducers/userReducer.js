import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("loginRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("loadUserRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("registerUserRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("updateUserRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("changePasswordRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("forgetPasswordRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("resetPasswordRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("logoutRequest", (state) => {
      console.log("logoutRequest");
      state.isLoading = true;
    });
  builder
    .addCase("loginSuccess", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
      state.user = action.payload;
    })
    .addCase("loadUserSuccess", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("changePasswordSuccess", (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase("forgetPasswordSuccess", (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase("resetPasswordSuccess", (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase("registerUserSuccess", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
    })
    .addCase("updateUserSuccess", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    })
    .addCase("logoutSuccess", (state, action) => {
      console.log("logoutSuccess");
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
    .addCase("registerUserFailure", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("updateUserFailure", (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("changePasswordFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("forgetPasswordFailure", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("resetPasswordFailure", (state, action) => {
      state.isLoading = false;
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
