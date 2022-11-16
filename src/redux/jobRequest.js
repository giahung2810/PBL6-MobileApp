import {createAxios as apiJWT} from '../api/apiJob'
import {instance as apiJob} from '../api/apiJob'

import { getJobsStart, getJobsSuccess, getJobsFailed} from './jobSlice'

export const getJobs = async (dispatch) => {
    dispatch(getJobsStart());
    try{
        const res = await apiJob.get('/jobs/jobs');
        dispatch(getJobsSuccess(res.data));
    } catch(err){
        dispatch(getJobsFailed(err));
        console.log(err);
    }
};
