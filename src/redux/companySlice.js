import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: 'company',
    initialState: {
        companys: {
            allCompanys: null,
            isFetching: false,
            error: false,
            message:null,
        },
        company:{
            company: null,
            isFetching: false,
            error: false,
            message:null,
        },
        review:{
            isFetching: false,
            error: false,
            message:null,
        }
    },
    reducers: {
        getCompanysStart: (state) => {
            state.companys.isFetching = true;
        },
        getCompanysSuccess: (state, action) => {
            state.companys.isFetching = false;
            state.companys.allCompanys = action.payload;
            state.companys.message = null;
            state.companys.error = false;
        },
        getCompanysFailed: (state, action) => {
            state.companys.isFetching = false;
            state.companys.error = true;
            state.companys.message = action.payload;
        }, 
        getCompanyStart: (state) => {
            state.company.isFetching = true;
        },
        getCompanySuccess: (state, action) => {
            state.company.isFetching = false;
            state.company.company = action.payload;
            state.company.message = null;
            state.company.error = false;
        },
        getCompanyFailed: (state, action) => {
            state.company.isFetching = false;
            state.company.error = true;
            state.company.message = action.payload;
        }, 
        postReviewStart: (state) => {
            state.review.isFetching = true;
        },
        postReviewSuccess: (state) => {
            state.review.isFetching = false;
            state.review.message = null;
            state.review.error = false;
        },
        postReviewFailed: (state, action) => {
            state.review.isFetching = false;
            state.review.error = true;
            state.review.message = action.payload;
        }
    }
})

export const {
    getCompanysStart,
    getCompanysSuccess,
    getCompanysFailed,
    getCompanyStart,
    getCompanySuccess,
    getCompanyFailed,
    postReviewStart,
    postReviewSuccess,
    postReviewFailed,
} = companySlice.actions;

export default companySlice.reducer;