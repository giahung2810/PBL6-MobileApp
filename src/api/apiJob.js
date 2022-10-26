import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";

const refreshToken = async (refreshToken) => {
    try{
        const res = await instance.post('/auth/token/refresh', {
            refresh: refreshToken
        });
        return res.data;
    } catch(e){
        console.error(e.response.data);
    }
}

export const instance =  axios.create({
    baseURL: 'https://api.quangdinh.me'
});

export const createAxios = (user, dispatch, loginSuccess) => {
    const newInstance = axios.create({ 
        baseURL: 'https://api.quangdinh.me'
    });
    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodedToken = jwt_decode(user?.tokens.access);
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken(user?.tokens.refresh);
                console.log('data', data);
                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                };
                dispatch(loginSuccess(refreshUser));
                config.headers['Authorization'] = 'Bearer ' + data.accessToken;
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        },
    );
    return newInstance;
};