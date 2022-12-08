import {createAxios as apiJWT} from '../api/apiJob'
import {instance as apiJob} from '../api/apiJob'

import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess, logoutFailed, logoutSuccess, logoutStart} from './authSlice'

export const loginUser = async (user, dispatch, navigation) => {
    dispatch(loginStart());
    try{
        console.log(user);
        const res = await apiJob.post('/auth/login' ,user);
        // console.log(res.data);
        dispatch(loginSuccess(res.data));
        navigation.navigate("MainNavigator", { 
            screen: 'Home',
            initial: false,
          });
    } catch(err){
        dispatch(loginFailed(err.response.data));
        console.log(err);
    }
};

export const registerUser = async (user, dispatch, navigation) => {
    dispatch(registerStart());
    try {
        const newUser = {
            email: user.email, 
            password: user.password, 
            password2: user.password2,
            gender: user.gender, 
            role: 'seeker', 
            date_of_birth: user.date_of_birth
        };
        console.log(newUser);
        const res = await apiJob.post('/auth/register', newUser);
        console.log(res)
        dispatch(registerSuccess());
        navigation.navigate('Login', { 
            screen: 'SignIn',
            initial: false,
          });
    } catch (error) {
        dispatch(registerFailed(error.response.data));
    }
};

export const logoutUser = async ( dispatch, navigation) => {
    dispatch(logoutStart());
    try{
        // await axiosJWT.post('/logout');
        dispatch(logoutSuccess());
        navigation.navigate('Login')
    } catch (error) {
        dispatch(logoutFailed());
    }
}
export const checkToken = async ( dispatch, navigation, refresh) => {
    const token = {
        refresh: refresh
    }
    try {
        const res = await apiJob.post('/auth/token/refresh', token);
    } catch (error) {
        console.log(error.response.data);
        navigation.navigate('Login');
    }
}

export const getProfile = async (dispatch, id) => {
    try{
        const res = await apiJob.get(`/seekers/candidate-profile/get_profile?id_candidate=${id}`);
        if (res.status == 200) {
            // console.log('API',res);
            return res.data;
        }
        // console.log('API',res.data);
        // 
    } catch(err){
        console.log(err);
    }
}
export const post_Profile = async (data) => {
    try{
        const res = await apiJob.post(`/seekers/profile`, data);
        if (res.status == 201) {
            // console.log('API',res);
            return res.data;
        }
        // console.log('API',res.data);
        // 
    } catch(err){
        console.log(err);
    }
}

export const put_Profile = async (id, data) => {
    try{
        const res = await apiJob.put(`/seekers/profiles/${id}`, data);
        if (res.status == 201) {
            // console.log('API',res);
            return res.data;
        }
        // console.log('API',res.data);
        // 
    } catch(err){
        console.log(err);
    }
}

export const getEducation = async ( id ) => {
    try{
        const res = await apiJob.get(`/seekers/profile-education?seeker_id=${id}`);
        // console.log('API',res.data);
        return res.data;
    } catch(err){
        console.log(err);
    }
}
export const getExpirence = async ( id ) => {
    try{
        const res = await apiJob.get(`/seekers/profile-expirence?seeker_id=${id}`);
        // console.log('API',res.data);
        return res.data;
    } catch(err){
        console.log(err);
    }
}
export const getSkill = async ( id ) => {
    try{
        const res = await apiJob.get(`/seekers/profile-skill?seeker_id=${id}`);
        // console.log('API',res.data);
        return res.data;
    } catch(err){
        console.log(err);
    }
}

export const put_Education = async ( id, data ) => {
    try {
        const res = await apiJob.put(`/seekers/educations/${id}`, data);
        // console.log('API',res.data);
        return res.data;
    } catch(err) {
        console.log(err);
    }
}
export const post_Education = async ( data ) => {
    try {
        const res = await apiJob.post(`/seekers/educations`, data);
        console.log('API',res.data);
        return res.data;
    } catch(err) {
        console.log(err);
    }
}
export const post_Expirence = async ( data , onPressOut) => {
    try {
        const res = await apiJob.post(`/seekers/expirences`, data);
        // console.log('API',res);
        if(res.status === 201) {
            onPressOut()
        } else {
            console.log('ERROR');
        }
        // return res.data;
    } catch(err) {
        console.log(err);
    }
}

export const put_Expirence = async ( id, data , onPressOut) => {
    try {
        const res = await apiJob.put(`/seekers/expirences/${id}`, data);
        // console.log('API',res);
        if(res.status === 200) {
            onPressOut()
        } else {
            console.log('ERROR');
        }
        // return res.data;
    } catch(err) {
        console.log(err);
    }
}
export const post_Skill = async ( data , onPressOut) => {
    try {
        const res = await apiJob.post(`/seekers/skills`, data);
        // console.log('API',res);
        if(res.status === 201) {
            onPressOut()
        } else {
            console.log('ERROR');
        }
        // return res.data;
    } catch(err) {
        console.log(err);
    }
}
export const put_Skill = async ( id, data , onPressOut) => {
    try {
        const res = await apiJob.put(`/seekers/skills/${id}`, data);
        // console.log('API',res);
        if(res.status === 200) {
            onPressOut()
        } else {
            console.log('ERROR');
        }
        // return res.data;
    } catch(err) {
        console.log(err);
    }
}