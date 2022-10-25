import apiJob from '../api/apiJob'
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from './authSlice'

export const loginUser = async (user, dispatch, navigation) => {
    dispatch(loginStart());
    try{
        console.log(user);
        const res = await apiJob.post('/auth/login' ,user);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
        navigation.navigate("MainNavigator");
    } catch(err){
        dispatch(loginFailed());
        console.log(error.response.data);
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
            role: 'employer', 
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
        dispatch(registerFailed());
        console.log(error.response.data);

        return (error.response.data);
    }
}
