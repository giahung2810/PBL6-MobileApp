import {instance as apiExam} from '../api/apiExam'
import {instance as apiJob} from '../api/apiJob'
import { examFailed, examStart, examSuccess} from './examSlice'


export const getExam = async (dispatch, id ) => {
    dispatch(examStart());
    try{
        const res = await apiExam.get(`/api/v1/test/${id}`);
        // console.log('API',res.data);
        
        if(res.status === 200) 
            dispatch(examSuccess());
            return res.data;
    } catch(err){
        dispatch(examFailed(err.response.data));
        console.log(err);
    }
}

export const postExam = async (dispatch , id , data, navigation, api, accessToken) => {
    dispatch(examStart());
    try{
        const res = await apiExam.post(`/api/v1/test/${id}/doing` ,data);
        console.log(res);
        let result;
        
        if(res.status === 200) {
            // dispatch(examSuccess());
            // return res.data;
            if(res.data.hasOwnProperty('meta')){
                result = res.data.data.result;
            }
            else{
                result = res.data.result;
            }
            const data_status = {
                job: data.job_id,
                user : data.user_id,
                result: result
            }
            console.log("data_status",data_status);
            const res_status = await api.patch(`/applicants/candidate/done_test` ,data_status, 
            {
                headers: {Authorization : `Bearer ${accessToken}`}
            });
            console.log(res_status);
            if(res_status.status === 200) {
                dispatch(examSuccess());
                return [res.data , res_status.data];
            }
        }
        // navigation.goBack();
    } catch(err){
        dispatch(examFailed(err.response.data));
        console.log(err);
    }
}

export const postResult = async (dispatch , data, navigation) => {
    dispatch(examStart());
    try{
        const res = await apiJob.patch(`/applicants/candidate/done_test` ,data);
        console.log('done_test' ,res);
        
        if(res.status === 200) {
            dispatch(examSuccess());
            return res.data;
        }
        // navigation.goBack();
    } catch(err){
        dispatch(examFailed(err.response.data));
        console.log(err);
    }
}