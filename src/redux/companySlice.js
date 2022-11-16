import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: 'company',
    initialState: {
        company: {
            allCompanys: null,
            isFetching: false,
            error: false,
            message:null,
        }
    },
    reducers: {
        getCompanysStart: (state) => {
            state.company.isFetching = true;
        },
        getCompanysSuccess: (state, action) => {
            state.company.isFetching = false;
            state.company.allCompanys = action.payload;
            state.company.message = null;
            state.company.error = false;
        },
        getCompanysFailed: (state, action) => {
            state.company.isFetching = false;
            state.company.error = true;
            state.company.message = action.payload;
        }
    }
})

export const {
    getCompanysStart,
    getCompanysSuccess,
    getCompanysFailed
} = companySlice.actions;

export default companySlice.reducer;