import {createAxios as apiJWT} from '../api/apiJob'
import {instance as apiJob} from '../api/apiJob'

import { getCompanysStart, getCompanysSuccess, getCompanysFailed, postReviewStart, postReviewSuccess, postReviewFailed, getCompanyStart, getCompanySuccess, getCompanyFailed} from './companySlice'

export const getTopCompanys = async (dispatch) => {
    dispatch(getCompanysStart());
    try{
        const res = await apiJob.get('/companies/companies/top_company');
        console.log("res",res);
        dispatch(getCompanysSuccess());
        return res.data;
        // console.log(res.data);
    } catch(err){
        dispatch(getCompanysFailed(err));
        console.log(err);
    }
};

export const getListCompanys = async (dispatch) => {
    dispatch(getCompanysStart());
    try{
        const res = await apiJob.get('/companies/companies');
        dispatch(getCompanysSuccess(res.data.results));
        return res.data;
        
    } catch(err){
        dispatch(getCompanysFailed(err));
        console.log(err);
    }
};

export const getCompany = async (dispatch, id) => {
    dispatch(getCompanyStart());
    try{
        const res = await apiJob.get('/companies/companies/' + id);
        dispatch(getCompanySuccess(res.data));
    } catch(err){
        dispatch(getCompanyFailed(err));
        console.log(err);
    }
};

export const post_Review_Company = async (dispatch, post_Review, api, accessToken) => {
    dispatch(postReviewStart());
    try{
        const res = await api.post('/reviews/reviews/create', post_Review , {
            headers: {Authorization : `Bearer ${accessToken}`}
        });
        dispatch(getCompanyStart());
        const res1 = await apiJob.get('/companies/companies/' + post_Review.company);
        dispatch(getCompanySuccess(res1.data));

        const res2 = await apiJob.get('/companies/companies/top_company');
        dispatch(getCompanysSuccess(res2.data));

        dispatch(postReviewSuccess());
        // console.log(res);z
    } catch(err){
        dispatch(postReviewFailed(err));
        console.log(err);
    }
}