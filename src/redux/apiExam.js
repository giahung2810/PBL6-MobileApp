import {instance as apiExam} from '../api/apiExam'

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

export const postExam = async (dispatch , id , data, navigation) => {
    dispatch(examStart());
    try{
        const res = await apiExam.post(`/api/v1/test/${id}/doing` ,data);
        console.log(res);

        dispatch(examSuccess());
        navigation.goBack();
    } catch(err){
        dispatch(examFailed(err.response.data));
        console.log(err);
    }
}