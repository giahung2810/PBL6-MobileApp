import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: 'job',
    initialState: {
        job: {
            allJobs: null,
            isFetching: false,
            error: false,
            message:null,
        }
    },
    reducers: {
        getJobsStart: (state) => {
            state.job.isFetching = true;
        },
        getJobsSuccess: (state, action) => {
            state.job.isFetching = false;
            state.job.allJobs = action.payload;
            state.job.message = null;
            state.job.error = false;
        },
        getJobsFailed: (state, action) => {
            state.job.isFetching = false;
            state.job.error = true;
            state.job.message = action.payload;
        }
    }
})

export const {
    getJobsStart,
    getJobsSuccess,
    getJobsFailed
} = jobSlice.actions;

export default jobSlice.reducer;