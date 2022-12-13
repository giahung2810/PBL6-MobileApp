import createContext from './createDataContext';
// import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        // case 'signup':
        //     return {errorMessage: '', token: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signout':
            return {token: null, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        dispatch({type: 'signin', payload: token});

        // navigate('TrackList');
    } else {
        // navigate('Signup');
    }
}

const clearErrorMessage = (dispatch) => () =>  {
    dispatch({ type : 'clear_error_message'});
};

const signup = (dispatch) => async ({ email , password }) => {
    try {
        // const response = await trackerApi.post('/signup', {email, password });
        // console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});

        // navigate('TrackList');
    } catch (err) {
        console.log(err.message);
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'});
    }
};


const signin = (dispatch) => async ({ username , password }) => {
    try {
        // const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', 'my-token-tosign');
        // dispatch({type: 'signin', payload: response.data.token});
        dispatch({type: 'signin', payload: 'my-token-tosign'});
        // console.log(username , password);
        navigate('MainNavigator');
    } catch (err) {
        console.log(err.message);
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in'});
    }
};


const signout = (dispatch) => async () => {
    try {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout'});
        console.log('logout');
        navigate('SignIn');
    } catch (err) {
        console.log(err.message);
    }
};

export const {Context, Provider} = createContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage: '' }
);
