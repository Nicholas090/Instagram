import $api from '../models/response';
import { AxiosResponse } from 'axios';
import { AuthResponse, IResponseError } from '../models/response/AuthResponse';

export default class AuthService {
	static async login(
		email: string,
		password: string,
	): Promise<AxiosResponse<AuthResponse | IResponseError>> {
		return $api.post<AuthResponse>('/login', { email, password });
	}

	static async registration(
		email: string,
		password: string,
		userName: string,
		userNickName: string,
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/login', { email, password, userName, userNickName });
	}

	static async logout(): Promise<void> {
		return $api.post('/login');
	}
}
