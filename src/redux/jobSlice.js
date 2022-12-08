import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: 'job',
    initialState: {
        jobs: {
            isFetching: false,
            error: false,
            message:null,
        },
        job: {
            isFetching: false,
            error: false,
            message:null,
            job: null
        },
        comment:{
            isFetching: false,
            error: false,
            message:null,
        }
    },
    reducers: {
        getJobsStart: (state) => {
            state.jobs.isFetching = true;
        },
        getJobsSuccess: (state) => {
            state.jobs.isFetching = false;
            state.jobs.message = null;
            state.jobs.error = false;
        },
        getJobsFailed: (state, action) => {
            state.jobs.isFetching = false;
            state.jobs.error = true;
            state.jobs.message = action.payload;
        },
        getJobStart: (state) => {
            state.job.isFetching = true;
        },
        getJobSuccess: (state, action) => {
            state.job.job = action.payload;
            state.job.isFetching = false;
            state.job.message = null;
            state.job.error = false;
        },
        getJobFailed: (state, action) => {
            state.job.isFetching = false;
            state.job.error = true;
            state.job.message = action.payload;
        },
        postCommentStart: (state) => {
            state.comment.isFetching = true;
        },
        postCommentSuccess: (state) => {
            state.comment.isFetching = false;
            state.comment.message = null;
            state.comment.error = false;
        },
        postCommentFailed: (state, action) => {
            state.comment.isFetching = false;
            state.comment.error = true;
            state.comment.message = action.payload;
        }
    }
})

export const {
    getJobsStart,
    getJobsSuccess,
    getJobsFailed,
    getJobStart,
    getJobSuccess,
    getJobFailed,
    postCommentStart,
    postCommentSuccess,
    postCommentFailed
} = jobSlice.actions;

export default jobSlice.reducer;