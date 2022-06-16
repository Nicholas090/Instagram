import { IUser } from '../models/IUser';
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { API_URL } from '../models/response';
import AuthService from '../services/AuthService';

export default class Store {
	user: IUser = {} as IUser;
	isAuth = false;

	constructor() {
		makeAutoObservable(this);
	}

	set setAuth(bool: boolean) {
		this.isAuth = bool;
	}

	set setUser(user: IUser) {
		this.user = user;
	}

	async login(email: string, password: string) {
		try {
			const response = await AuthService.login(email, password);
			if ('accessToken' && 'user' in response.data) {
				localStorage.setItem('token', response.data.accessToken);
				this.setAuth = true;
				this.setUser = response.data.user;
			}
		} catch (e: any) {
			await Promise.reject(e.response.data);
		}
	}

	async registration(email: string, password: string, userName: string, userNickName: string) {
		try {
			const response = await AuthService.registration(email, password, userName, userNickName);
			localStorage.setItem('token', response.data.accessToken);
			this.setAuth = true;
			this.setUser = response.data.user;
		} catch (e: any) {
			console.log(e.response.data.message);
		}
	}

	async logout(email: string, password: string) {
		try {
			const response = await AuthService.logout();
			localStorage.removeItem('token');
			this.setAuth = false;
			this.setUser = {} as IUser;
		} catch (e: any) {
			console.log(e.response.data.message);
		}
	}
	async checkAuth() {
		try {
			const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
				withCredentials: true,
			});
			localStorage.setItem('token', response.data.accessToken);
			this.setAuth = true;
			this.setUser = response.data.user;
			console.log(response);
			return true;
		} catch (e: any) {
			console.log(e);
		}
	}
}
