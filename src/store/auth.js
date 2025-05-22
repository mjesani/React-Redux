import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        Login(state) {
            state.isAuthenticated = true;
        },
        Logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;