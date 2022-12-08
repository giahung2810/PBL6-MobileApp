import { createSlice } from "@reduxjs/toolkit";

const examSlice = createSlice({
    name : 'exam',
    initialState: {
        exam: {
            isFetching: false,
            error: false,
            message:null
        },
    },
    reducers: {
        examStart: (state) => {
            state.exam.isFetching = true;
        },
        examSuccess: (state) => {
            state.exam.isFetching = false;
            state.exam.error = false;
            state.exam.message = null;
        },
        examFailed: (state, action) => {
            state.exam.isFetching = false;
            state.exam.error = true;
            state.exam.message = action.payload;
        },
    }
});

export const {
    examStart,
    examSuccess,
    examFailed,
}  = examSlice.actions;

export default examSlice.reducer;