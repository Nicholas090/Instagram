import { IUser } from '../IUser';

export interface IResponseError {
	error: boolean;
	message: string;
}
export interface AuthResponse {
	accessToken: string;
	refreshToken: string;
	user: IUser;
}
