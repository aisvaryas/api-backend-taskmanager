import api from './api';

export const registerUser = async(userData) => {
    const response = await api.post(
        '/auth/register',
        userData
    );
    return response.data;
};

export const loginUser = async(userData) => {
    const response = await api.post(
        '/auth/login',
        userData
    );
    localStorage.setItem(
        'token',
        response.data
    );
    return response.data;
};