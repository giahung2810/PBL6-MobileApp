import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
            message:null
        },
        register: {
            isFetching: false,
            error: false,
            success: false,
            message:null  
        },
        logout: {
            isFetching: false,
            error: false,
        },
        checkToken: {
            isFetching: false,
            error: false,
            check: false,
            message:null  
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
            state.login.message = null;
        },
        loginUpdate: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser.tokens.access = action.payload;
            state.login.error = false;
            state.login.message = null;
        },
        loginFailed: (state, action) => {
            state.login.isFetching = false;
            state.login.error = true;
            state.login.message = action.payload;
        },
        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.logout.isFetching = false;
            state.login.currentUser = null;
            state.logout.error = false;
        },
        logoutFailed: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
            state.register.message = null;
        },
        registerFailed: (state, action) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.message = action.payload;
        },
        checkTokenStart: (state) => {
            state.checkToken.isFetching = true;
        },
        checkTokenSuccess: (state, payload) => {
            state.checkToken.isFetching = false;
        }
    }
});

export const {
    loginStart,
    loginSuccess,
    loginUpdate,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
}  = authSlice.actions;

export default authSlice.reducer;