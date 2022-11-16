import {createAxios as apiJWT} from '../api/apiJob'
import {instance as apiJob} from '../api/apiJob'

import { getCompanysStart, getCompanysSuccess, getCompanysFailed} from './companySlice'

export const getTopCompanys = async (dispatch) => {
    dispatch(getCompanysStart());
    try{
        const res = await apiJob.get('/companies/companies/top_company');
        dispatch(getCompanysSuccess(res.data));
        // console.log(res.data);
    } catch(err){
        dispatch(getCompanysFailed(err));
        console.log(err);
    }
};

export const post_Review_Company = async (dispatch, post_Review, api, accessToken) => {
    console.log(post_Review)
    try{
        const res = await api.post('/reviews/reviews', post_Review , {
            headers: {Authorization : `Bearer ${accessToken}`}
        });
        // console.log(res);z
    } catch(err){
        console.log(err);
    }
}