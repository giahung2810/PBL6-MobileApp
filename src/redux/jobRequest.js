import {createAxios as apiJWT} from '../api/apiJob'
import {instance as apiJob} from '../api/apiJob'

import { getJobsStart, getJobsSuccess, getJobsFailed,getJobStart, getJobSuccess, getJobFailed, postCommentStart,postCommentSuccess, postCommentFailed} from './jobSlice'

export const getJobs = async (dispatch) => {
    dispatch(getJobsStart());
    try{
        const res = await apiJob.get('/jobs/user/get_jobs');
        dispatch(getJobsSuccess());
        // console.log('API',res.data);
        return res.data;
    } catch(err){
        dispatch(getJobsFailed(err));
        console.log(err);
    }
};
export const getJob = async (dispatch, id) => {
    dispatch(getJobsStart());
    try{
        const res = await apiJob.get(`/jobs/user/${id}/job`);
        dispatch(getJobSuccess(res.data));
    } catch(err){
        dispatch(getJobFailed(err));
        console.log(err);
    }
};
export const getJobbyID = async ( id ) => {
    try{
        const res = await apiJob.get(`/jobs/user/${id}/job`);
        if(res.status === 200) {
            return res.data;
        }
    } catch(err){
        console.log(err);
    }
};
export const getApplication = async (dispatch, id ) => {
    dispatch(getJobsStart());
    try{
        const res = await apiJob.get(`/applicants/applicant/${id}`);
        if (res.status === 200) {
            dispatch(getJobsSuccess());
            // console.log('API',res.data);
            return res.data;
        }
    } catch(err){
        dispatch(getJobsFailed(err));
        console.log(err);
    }
}
export const getListApplication = async (dispatch, id) => {
    dispatch(getJobsStart());
    try{
        const res = await apiJob.get(`/applicants/candidate/get_applicant?id_candidate=${id}`);
        dispatch(getJobsSuccess());
        // console.log('API',res.data);
        return res.data;
    } catch(err){
        dispatch(getJobsFailed(err));
        console.log(err);
    }
}
export const post_Comment_Job = async (dispatch, post_comment, api, accessToken) => {
    dispatch(postCommentStart());
    try{
        const res = await api.post('/comment_posts/comments/create', post_comment , {
            headers: {Authorization : `Bearer ${accessToken}`}
        });
        dispatch(getJobStart());
        const res1 = await apiJob.get(`/jobs/user/${post_comment.job}/job`);
        dispatch(getJobSuccess(res1.data));

        // const res2 = await apiJob.get('/companies/companies/top_company');
        // dispatch(getCompanysSuccess(res2.data));

        dispatch(postCommentSuccess());
        // console.log(res);z
    } catch(err){
        dispatch(postCommentFailed(err));
        console.log(err);
    }
}

export const get_SaveJobs = async (dispatch,id) => {
    dispatch(getJobsStart());
    try{
        // const res = await apiJob.get(`/favorites/favorites/${id}`);
        // if(res.status === 200) {
        //     for(var k in res.data) res.data[k].job.id_favorite = res.data[k].id;
        //     return res.data;
        // }
        const res_j = await apiJob.get('/jobs/user/get_jobs');
        if (res_j.status === 200) {
            var jobs = res_j.data;
        }
        const res_f = await apiJob.get(`/favorites/favorites/${id}`);
        if (res_f.status === 200) {
            var favorites = res_f.data;
        }
        let newArray_isF = jobs?.filter(
            (job) => favorites?.some((favorite) => favorite.job.id === job.job.id)
        );
        newArray_isF.map((array) => {
            array.job.isFavorite = true
        })
        // for(var k in favorites) newArray_isF[k].job.id_favorite = favorites[k].id;
        for(var k in newArray_isF) {
            for(var j in favorites)
                // newArray_isF[k].job.id_favorite = favorites[k].id
            {
                if(newArray_isF[k].job.id == favorites[j].job.id)
                {
                    newArray_isF[k].job.id_favorite = favorites[j].id
                }
            }
        };
        const children = newArray_isF;
        dispatch(getJobsSuccess());
        // console.log('API',children);
        return children;
    } catch(err){
        dispatch(getJobsFailed(err));
        console.log(err);
    }
}

export const post_SaveJobs = async (data) => {
    try{
        const res = await apiJob.post(`/favorites/favorites/create`, data);
        if(res.status === 201) {
            return res.data;
        }
    } catch(err){
        console.log(err);
    }
}
export const delete_SaveJobs = async (jobid) => {
    try{
        const res = await apiJob.delete(`/favorites/favorites/delete/${jobid}`);
        if(res.status === 201) {
            return res.data;    
        }
    } catch(err){
        console.log(err);
    }
}

export const get_Jobs_Favorites = async (dispatch, id) => {
    console.log(id);
    if(id === 0 ) return [];
    dispatch(getJobsStart());
    try{
        const res_j = await apiJob.get('/jobs/user/get_jobs');
        if (res_j.status === 200) {
            var jobs = res_j.data;
        }
        const res_f = await apiJob.get(`/favorites/favorites/${id}`);
        if (res_f.status === 200) {
            var favorites = res_f.data;
        }
        let newArray_isF = jobs?.filter(
            (job) => favorites?.some((favorite) => favorite.job.id === job.job.id)
        );
        newArray_isF.map((array) => {
            array.job.isFavorite = true
        })
        for(var k in newArray_isF) {
            for(var j in favorites)
                // newArray_isF[k].job.id_favorite = favorites[k].id
            {
                if(newArray_isF[k].job.id == favorites[j].job.id)
                {
                    newArray_isF[k].job.id_favorite = favorites[j].id
                }
            }
        };
        let newArray_noF = jobs?.filter(
            (job) => !favorites?.some((favorite) => favorite.job.id === job.job.id)
        );
        newArray_noF.map((array) => {
            array.job.isFavorite = false
        })
        const children = newArray_isF.concat(newArray_noF);
        dispatch(getJobsSuccess());
        // console.log('API',children);
        return children;
    } catch(err){
        dispatch(getJobsFailed(err));
        console.log(err);
    }
};

export const get_Jobs_Search = async (dispatch, id) => {
    dispatch(getJobsStart());
    try{
        const res_j = await apiJob.get('/jobs/user/get_jobs');
        if (res_j.status === 200) {
            var jobs = res_j.data;
        }
        const res_f = await apiJob.get(`/favorites/favorites/${id}`);
        if (res_f.status === 200) {
            var favorites = res_f.data;
        }
        let newArray_isF = jobs?.filter(
            (job) => favorites?.some((favorite) => favorite.job.id === job.job.id)
        );
        newArray_isF.map((array) => {
            array.job.isFavorite = true
        })
        for(var k in newArray_isF) {
            for(var j in favorites)
                // newArray_isF[k].job.id_favorite = favorites[k].id
            {
                if(newArray_isF[k].job.id == favorites[j].job.id)
                {
                    newArray_isF[k].job.id_favorite = favorites[j].id
                }
            }
        };
        let newArray_noF = jobs?.filter(
            (job) => !favorites?.some((favorite) => favorite.job.id === job.job.id)
        );
        newArray_noF.map((array) => {
            array.job.isFavorite = false
        })
        const children = newArray_isF.concat(newArray_noF);

        children.map((job) => {
            job.job.company_name = job.job.company.company_name,
            job.job.company_location = job.job.company.company_location
        })
        dispatch(getJobsSuccess());
        // console.log('API',children);
        return children;
    } catch(err){
        dispatch(getJobsFailed(err));
        console.log(err);
    }
};

export const get_Jobs_Application = async (dispatch, id) => {
    dispatch(getJobsStart());
    try{
        const res_j = await apiJob.get('/jobs/user/get_jobs');
        if (res_j.status === 200) {
            var jobs = res_j.data;
        }
        const res_f = await apiJob.get(`/applicants/candidate/get_applicant?id_candidate=${id}`);
        if (res_f.status === 200) {
            var applicants = res_f.data;
        }
        let newArray_isA = jobs?.filter(
            (job) => applicants?.some((applicant) => applicant.job === job.job.id)
        );
        newArray_isA.map((job) => {
            job.job.company_name = job.job.company.company_name,
            job.job.company_location = job.job.company.company_location
        });
        for(var k in newArray_isA) {
            for(var j in applicants)
                // newArray_isF[k].job.id_favorite = favorites[k].id
            {
                if(newArray_isA[k].job.id == applicants[j].id)
                {
                    newArray_isA[k].application = applicants[j];
                    newArray_isA[k].job.applicant_status = applicants[j].status;
                }
            }
        };
        dispatch(getJobsSuccess());
        // console.log('API',children);
        return newArray_isA;
    } catch(err){
        dispatch(getJobsFailed(err));
        console.log(err);
    }
};

export const getListTime_Interview = async (id_applicant) => {
    // console.log(id_applicant.id_applicant);
    try{
        const res = await apiJob.get(`/applicants/candidate/get_times_interview?id_applicant=${id_applicant}`);
        if(res.status === 200) {
            return res.data;    
        }
    } catch(err){
        console.log(err);
    }
}
export const post_Time_Interview = async (available,id_applicant) => {
    try{
        const res = await apiJob.patch(`/applicants/candidate/confirm_interview?id_applicant=${id_applicant}`, available);
        // if(res.status === 200) {
        //     return res.data;    
        // }
    } catch(err){
        console.log(err);
    }
}
export const cancel_interview = async (id) => {
    try {
        const res = await apiJob.patch(`/applicants/candidate/${id}/cancel_interview`);
        console.log(res);
    } catch (error) {
        console.log(err);
    }
}