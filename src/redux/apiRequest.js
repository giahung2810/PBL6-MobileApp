import apiJob from '../api/apiJob'
import { loginStart } from './authSlice'

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try{
        const res = await apiJob.post('/login' ,user);
        dispatch(loginSuccess(res.data));
        navigate("");
    } catch(err){
        dispatch(loginError());
    }
}