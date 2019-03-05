import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import jwt_decode from 'jwt-decode';

//Import auth token function to apply token to every request sent by logged in user
import setAuthToken from '../utils/setAuthToken';

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('api/users/login', userData)
    .then(res => {
      //Save token in local storage
      const { token } = res.data;
      //Set token to Local Storage
      localStorage.setItem('jwtToken', token);
      //Set Token to auth Header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set Logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Log user out
export const logoutUser = () => dispatch => {
  //Remove token from local storage
  localStorage.removeItem('jwtToken');
  //Remove auth jeader for future requests
  setAuthToken(false);
  //Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
