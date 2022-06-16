import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'http://localhost:3002/api';

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
	if (config.headers === undefined) {
		throw new Error('Header undefined in axios');
	} else {
		config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
		return config;
	}
});

export default $api;
